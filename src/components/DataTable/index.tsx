"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
    DataGrid,
    GridColDef,
    GridColumnMenuSlotProps,
    GridColumnVisibilityModel,
    GridPaginationModel,
    GridRowsProp,
} from "@mui/x-data-grid";
import { Paper, Typography, Box, Button, Modal, TextField } from "@mui/material";
import axios from "axios";
import Papa from "papaparse";
import CircularProgress from "@mui/material/CircularProgress";
import { formatDate, formatDateYear } from "@/utils";
import NoData from "../NoData";
import Loading from "../Loading";
import Chart from "../Chart";
import PivotTableComponent from "../PivotTable";
import { DataGridPremium } from "@mui/x-data-grid-premium";
import { format, parse, parseISO } from "date-fns";

interface SavedView {
    name: string;
    columnVisibilityModel: GridColumnVisibilityModel;
    columnOrder: string[];
}
const DataTable = () => {
    const [data, setData] = useState<any[]>([]);
    const [pageSize, setPageSize] = useState(5);
    const [loading, setLoading] = useState(false);

    const [columnVisibilityModel, setColumnVisibilityModel] = useState<GridColumnVisibilityModel>({});
    const [columnOrder, setColumnOrder] = useState<string[]>([]);

    const [rowCount, setRowCount] = useState(0);

    const [openModal, setOpenModal] = useState(false);
    const [viewName, setViewName] = useState<string>("");
    const [savedViews, setSavedViews] = useState<SavedView[]>([]);

    const [filteredData, setFilteredData] = useState<any>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        // Load data from your CSV file (Here, replace with the actual path or API call)
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get("./FMSCA_records.csv"); // You can also use local data or any other method
            const csvData = Papa.parse(response.data, { header: true })?.data;
            setData(csvData);
            setFilteredData(csvData);
            setLoading(false);
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Only run this code on the client side
        if (typeof window !== "undefined") {
            const savedViews = JSON.parse(localStorage.getItem("savedViews") || "[]");
            setSavedViews(savedViews);

            const savedSettings = JSON.parse(localStorage.getItem("tableSettings") || "{}");
            console.log(savedSettings);
            if (savedSettings.columnVisibilityModel) setColumnVisibilityModel(savedSettings.columnVisibilityModel);
            if (savedSettings.columnOrder) setColumnOrder(savedSettings.columnOrder);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const settings = {
                columnVisibilityModel,
                columnOrder,
            };
            localStorage.setItem("tableSettings", JSON.stringify(settings));
        }
    }, [columnVisibilityModel, columnOrder]);

    const saveView = (): void => {
        const newView: SavedView = {
            name: viewName,
            columnVisibilityModel,
            columnOrder,
        };

        console.log(newView);
        setSavedViews([...savedViews, newView]);
        localStorage.setItem("savedViews", JSON.stringify([...savedViews, newView]));
        setOpenModal(false);
    };

    const loadView = (view: SavedView) => {
        setColumnVisibilityModel(view.columnVisibilityModel);
        setColumnOrder(view.columnOrder);
        setOpenModal(false);
    };

    const resetToDefault = () => {
        setColumnVisibilityModel({});
        setColumnOrder(columns.map(col => col.field));
        localStorage.removeItem("tableSettings");
    };

    const generateShareLink = () => {
        const encodedSettings = encodeURIComponent(JSON.stringify({ columnVisibilityModel, columnOrder }));
        const shareLink = `${window.location.origin}?settings=${encodedSettings}`;
        navigator.clipboard.writeText(shareLink);
        alert("Link copied to clipboard!");
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const settings = params.get("settings");
        if (settings) {
            const decodedSettings = JSON.parse(decodeURIComponent(settings));
            setColumnVisibilityModel(decodedSettings.columnVisibilityModel);
            setColumnOrder(decodedSettings.columnOrder);
        }
    }, []);

    const handleSearchChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const query = e.target.value;
            setSearchQuery(query);

            // Debounce logic
            const debounceTimeout = setTimeout(() => {
                if (query) {
                    const filtered = data.filter(row =>
                        Object.values(row).some(value => String(value).toLowerCase().includes(query.toLowerCase())),
                    );
                    setFilteredData(filtered);
                } else {
                    setFilteredData(data);
                }
            }, 300); // 300ms debounce time

            return () => clearTimeout(debounceTimeout); // Clear timeout on cleanup
        },
        [data],
    );

    const columns = [
        { field: "legal_name", headerName: "Legal Name", flex: 0.15, editable: true, type: "string" },
        { field: "dba_name", headerName: "DBA Name", flex: 0.15, editable: true, type: "string" },
        { field: "entity_type", headerName: "Entity Type", flex: 0.15, editable: true, type: "string" },
        { field: "operating_status", headerName: "Operating Status", flex: 0.15, editable: true, type: "string" },
        { field: "physical_address", headerName: "Physical Address", flex: 0.15, editable: true, type: "string" },
        { field: "p_street", headerName: "Street", flex: 0.15, editable: true, type: "string" },
        { field: "p_city", headerName: "City", flex: 0.15, editable: true, type: "string" },
        { field: "p_state", headerName: "State", flex: 0.15, editable: true, type: "string" },
        {
            field: "created_dt",
            headerName: "Created Date",
            flex: 0.15,
            editable: true,
            type: "date",
            valueGetter: (value: any) => {
                const date = value ? parseISO(value) : null;
                return date;
            },
        },
        {
            field: "data_source_modified_dt",
            headerName: "Modified Date",
            flex: 0.15,
            editable: true,
            type: "date",
            valueGetter: (value: any) => {
                const date = value ? parseISO(value) : null;
                return date;
            },
        },
    ];

    return (
        <div className="h-full w-full flex flex-col">
            <Typography variant="h4" className="text-center mb-4">
                FMSCA Records
            </Typography>

            {loading ? (
                <Loading />
            ) : filteredData.length === 0 ? (
                <NoData />
            ) : (
                <Paper className="h-full w-full shadow-lg flex-grow">
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <TextField
                            label="Search"
                            variant="outlined"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            style={{ marginRight: "16px" }}
                        />
                        <Button variant="contained" onClick={() => setOpenModal(true)}>
                            Save/Load View
                        </Button>
                        <Button variant="outlined" onClick={resetToDefault}>
                            Reset to Default
                        </Button>
                        <Button variant="contained" onClick={generateShareLink}>
                            Generate Share Link
                        </Button>
                    </Box>
                    <DataGridPremium
                        rows={filteredData}
                        //@ts-ignore
                        columns={columns}
                        pageSizeOptions={[10, 25, 100]}
                        loading={loading}
                        pagination
                        columnVisibilityModel={columnVisibilityModel}
                        onColumnVisibilityModelChange={newModel => setColumnVisibilityModel(newModel)}
                        columnOrder={columnOrder}
                        sortingOrder={["asc", "desc"]}
                        getRowClassName={params => (params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd")}
                        onColumnOrderChange={(newOrder: any) => setColumnOrder(newOrder)}
                        initialState={{
                            columns: {
                                columnVisibilityModel: columnVisibilityModel,
                            },
                            pagination: {
                                paginationModel: {
                                    pageSize: 13,
                                },
                            },
                        }}
                        slots={{
                            loadingOverlay: CircularProgress as GridColumnMenuSlotProps["loadingOverlay"],
                        }}
                    />
                    <Chart data={data || []} />

                    {/* <PivotTableComponent data={data} /> */}
                </Paper>
            )}

            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Box
                    p={3}
                    bgcolor="white"
                    borderRadius={4}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                    }}>
                    <Typography variant="h6" mb={2}>
                        Save or Load View
                    </Typography>
                    <TextField
                        label="View Name"
                        fullWidth
                        value={viewName}
                        onChange={e => setViewName(e.target.value)}
                    />
                    <Button variant="contained" onClick={saveView} fullWidth>
                        Save View
                    </Button>
                    <Box mt={2}>
                        {savedViews.map(view => (
                            <Button
                                key={view.name}
                                variant="outlined"
                                onClick={() => loadView(view)}
                                fullWidth
                                style={{ marginBottom: "8px" }}>
                                {view.name}
                            </Button>
                        ))}
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default DataTable;
