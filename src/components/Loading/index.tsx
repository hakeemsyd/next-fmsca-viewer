import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const Loading: React.FC = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <CircularProgress />
        </Box>
    );
};

export default Loading;
