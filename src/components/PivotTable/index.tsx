"use client";
import * as React from "react";
import { DataGridPremium, GridRowGroupingModel, GridRowsProp, useGridApiRef } from "@mui/x-data-grid-premium";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import Papa from "papaparse";
import { formatDate, formatDateMonth, formatDateYear } from "@/utils";

export default function PivotTableComponent() {
    const apiRef = useGridApiRef();

    const [groupby, setGroupBy] = React.useState("none");
    const [data, setData] = React.useState<any[]>([]);
    const [rowGroupingModel, setRowGroupingModel] = React.useState<GridRowGroupingModel>([]);

    // Memoize columns to avoid re-creation on each render
    const columns = React.useMemo(
        () => [
            { field: "legal_name", headerName: "Legal Name", flex: 0.15 },
            { field: "dba_name", headerName: "DBA Name", flex: 0.15 },
            { field: "entity_type", headerName: "Entity Type", flex: 0.15 },
            { field: "operating_status", headerName: "Operating Status", flex: 0.15 },
            { field: "physical_address", headerName: "Physical Address", flex: 0.15 },
            { field: "p_street", headerName: "Street", flex: 0.15 },
            { field: "p_city", headerName: "City", flex: 0.15 },
            { field: "p_state", headerName: "State", flex: 0.15 },
            { field: "created_dt", headerName: "Created Date", flex: 0.15 },
            { field: "data_source_modified_dt", headerName: "Modified Date", flex: 0.15 },
            { field: groupby, headerName: "Group By", flex: 0.15, hide: true },
        ],
        [groupby],
    );

    // Memoize grid rows
    const gridRows: GridRowsProp = React.useMemo(
        () =>
            data.map((row: any, index: number) => ({
                id: index,
                ...row,
                created_dt: formatDate(row.created_dt, false, false),
                data_source_modified_dt: formatDate(row.data_source_modified_dt, false, false),
                [groupby]:
                    groupby === "month"
                        ? formatDateMonth(row.data_source_modified_dt, false)
                        : groupby === "year"
                        ? formatDateYear(row.data_source_modified_dt, false)
                        : index,
            })),
        [data, groupby],
    );

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("./FMSCA_records.csv");
                const parsedData = Papa.parse(response.data, { header: true }).data;
                setData(parsedData);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    const handleChange = React.useCallback((event: SelectChangeEvent) => {
        const value = event.target.value as string;
        setGroupBy(value);
        if (value === "none") {
            setRowGroupingModel([]);
        } else {
            setRowGroupingModel([value]);
        }
    }, []);

    return (
        <div style={{ height: 600, width: "100%" }}>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Group By</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={groupby}
                    label="Group By"
                    onChange={handleChange}>
                    <MenuItem value={"none"}>None</MenuItem>
                    <MenuItem value={"month"}>Monthly</MenuItem>
                    <MenuItem value={"year"}>Yearly</MenuItem>
                </Select>
            </FormControl>
            <DataGridPremium
                pageSizeOptions={[10, 25, 100]}
                rows={gridRows}
                columns={columns}
                apiRef={apiRef}
                pagination
                rowGroupingModel={rowGroupingModel}
                onRowGroupingModelChange={setRowGroupingModel}
                initialState={{
                    columns: {
                        columnVisibilityModel: {
                            [groupby]: false,
                        },
                    },
                    pagination: {
                        paginationModel: {
                            pageSize: 13,
                        },
                    },
                }}
            />
        </div>
    );
}
