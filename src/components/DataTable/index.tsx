"use client";
import React, { useState, useEffect } from "react";
import { DataGrid, GridColumnMenuSlotProps, GridRowsProp } from "@mui/x-data-grid";
import { Paper, Container, Typography, Box } from "@mui/material";
import axios from "axios";
import Papa from "papaparse";
import CircularProgress from "@mui/material/CircularProgress";
import { formatDate } from "@/utils";
const DataTable = () => {
    const [data, setData] = useState<any[]>([]);
    const [pageSize, setPageSize] = useState(5);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Load data from your CSV file (Here, replace with the actual path or API call)
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get("./FMSCA_records.csv"); // You can also use local data or any other method
            const csvData = Papa.parse(response.data, { header: true }).data;
            setData(csvData);
            setLoading(false);
        };

        fetchData();
    }, []);

    const columns = [
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
    ];

    const gridRows: GridRowsProp = data
        ? data.map((row: any, index: number) => ({
              id: index,
              ...row,
              created_dt: formatDate(row.created_dt, false, false),
              data_source_modified_dt: formatDate(row.data_source_modified_dt, false, false),
          }))
        : [];

    return (
        <div className="h-full w-full flex flex-col">
            <Typography variant="h4" className="text-center mb-4">
                FMSCA Records
            </Typography>
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <CircularProgress />
                </Box>
            ) : gridRows.length === 0 ? (
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <Typography variant="labelS" className="text-center mb-4">
                        No Data Available
                    </Typography>
                </Box>
            ) : (
                <Paper className="h-full w-full shadow-lg flex-grow">
                    <DataGrid
                        rows={gridRows || []}
                        columns={columns}
                        pageSizeOptions={[10, 25, 100]}
                        loading={loading}
                        pagination
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 13,
                                },
                            },
                        }}
                        slots={{
                            loadingOverlay: CircularProgress as GridColumnMenuSlotProps["loadingOverlay"],
                        }}
                        sx={{
                            ".MuiDataGrid-root": {
                                height: "100%",
                            },
                            ".MuiDataGrid-cell": {
                                backgroundColor: "#f9f9f9",
                            },
                            ".MuiDataGrid-columnHeader": {
                                backgroundColor: "#f1f1f1",
                                fontWeight: "bold",
                            },
                            ".MuiDataGrid-footerContainer": {
                                backgroundColor: "#f1f1f1",
                            },
                        }}
                    />
                </Paper>
            )}
        </div>
    );
};

export default DataTable;
