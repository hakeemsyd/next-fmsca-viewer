import React, { useState, useMemo, useCallback } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Chart = ({ data }: any) => {
    const [selectedEntityType, setSelectedEntityType] = useState("CARRIER");

    const getMonth = (date: string) => {
        const [month, , year] = date.split("/").map(Number);
        return `${month}/${year}`;
    };

    const handleChange = useCallback((event: SelectChangeEvent) => {
        const value = event.target.value as string;
        setSelectedEntityType(value);
    }, []);

    const entityTypes = [
        "CARRIER",
        "BROKER",
        "CARRIER/BROKER",
        "CARRIER/IEP",
        "CARRIER/SHIPPER",
        "FREIGHT FORWARDER/BROKER",
        "CARRIER/FREIGHT FORWARDER/BROKER",
        "SHIPPER/BROKER",
        "CARRIER/FREIGHT FORWARDER",
        "CARRIER/BROKER/IEP",
        "SHIPPER",
        "CARRIER/SHIPPER/BROKER",
        "BROKER/IEP",
        "FREIGHT FORWARDER",
        "CARRIER/CARGO TANK",
        "CARGO TANK",
        "IEP",
        "CARRIER/FREIGHT FORWARDER/IEP",
        "FREIGHT FORWARDER/IEP",
        "CARRIER/FREIGHT FORWARDER/BROKER/IEP",
        "FREIGHT FORWARDER/BROKER/IEP",
        "CARRIER/CARGO TANK/IEP",
        "CARGO TANK/IEP",
        "FREIGHT FORWARDER/CARGO TANK",
        "CARRIER/SHIPPER/IEP",
        "SHIPPER/FREIGHT FORWARDER/BROKER",
        "FREIGHT FORWARDER/CARGO TANK/IEP",
        "CARRIER/FREIGHT FORWARDER/CARGO TANK",
        "SHIPPER/FREIGHT FORWARDER",
    ];

    // Use useMemo to optimize data aggregation
    const aggregatedData = useMemo(() => {
        return data.reduce((acc: any, current: any) => {
            // Filter by selected entity type
            if (selectedEntityType && current.entity_type !== selectedEntityType) {
                return acc;
            }

            const month = current?.out_of_service_date ? getMonth(current.out_of_service_date) : null;
            if (month) {
                if (!acc[month]) {
                    acc[month] = { month, outOfService: 1 };
                } else {
                    acc[month].outOfService += 1;
                }
            }
            return acc;
        }, {});
    }, [data, selectedEntityType]); // Recalculate only when data or selectedEntityType changes

    const chartData: any[] = useMemo(() => Object.values(aggregatedData), [aggregatedData]);

    return (
        <Box className="h-1/3 mt-4">
            <FormControl className="w1/4">
                <InputLabel id="entity-type-select-label">Entity Type</InputLabel>
                <Select
                    labelId="entity-type-select-label"
                    id="entity-type-select"
                    value={selectedEntityType}
                    label="Entity Type"
                    onChange={handleChange}>
                    {entityTypes.map((type, index) => (
                        <MenuItem key={index} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <BarChart
                grid={{ vertical: true }}
                xAxis={[{ scaleType: "band", dataKey: "month" }]}
                width={800}
                height={500}
                dataset={chartData}
                series={[{ type: "bar", dataKey: "outOfService" }]}
            />
        </Box>
    );
};

export default Chart;
