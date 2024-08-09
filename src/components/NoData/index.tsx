import { Box, Typography } from "@mui/material";
import React from "react";

const NoData: React.FC = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <Typography variant="labelS" className="text-center mb-4">
                No Data Available
            </Typography>
        </Box>
    );
};

export default NoData;
