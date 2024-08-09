import path from "path";
import { NextResponse } from "next/server";
import fs from "fs";
import Papa from "papaparse";

const csvFilePath = path.resolve(process.cwd(), "public", "FMSCA_records.csv");

interface CsvRow {
    legal_name: string;
    dba_name: string;
    entity_type: string;
    operating_status: string;
    physical_address: string;
    p_street: string;
    p_city: string;
    p_state: string;
    created_dt: string;
    data_source_modified_dt: string;
}

interface QueryParams {
    page: string;
    pageSize: string;
    searchQuery?: string;
    sortField?: string;
    sortOrder?: "asc" | "desc";
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "0", 10);
    const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
    const searchQuery = searchParams.get("searchQuery") || "";
    const sortField = searchParams.get("sortField") || "";
    const sortOrder = (searchParams.get("sortOrder") as "asc" | "desc") || "asc";

    try {
        // Read the CSV file
        const file = fs.readFileSync(csvFilePath, "utf8");

        // Parse the CSV file
        const parsedData = Papa.parse<CsvRow>(file, {
            header: true,
            dynamicTyping: true,
        });

        let rows = parsedData.data;

        // Filter data based on search query
        if (searchQuery) {
            const regex = new RegExp(searchQuery, "i"); // 'i' makes it case-insensitive
            rows = rows.filter(row => Object.values(row).some(value => String(value).match(regex)));
        }

        // Sort data
        if (sortField) {
            rows.sort((a, b) => {
                if (sortOrder === "asc") {
                    return a[sortField as keyof CsvRow] > b[sortField as keyof CsvRow] ? 1 : -1;
                } else {
                    return a[sortField as keyof CsvRow] < b[sortField as keyof CsvRow] ? 1 : -1;
                }
            });
        }

        // Paginate data
        const totalRows = rows.length;
        const startIndex = page * pageSize;
        const paginatedRows = rows.slice(startIndex, startIndex + pageSize);

        // Return the response
        return NextResponse.json({
            rows: paginatedRows,
            totalCount: totalRows,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
    }
}
