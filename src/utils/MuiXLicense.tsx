"use client";

import { LicenseInfo } from "@mui/x-license-pro";

const licenseKey = process.env.NEXT_PUBLIC_MUIX_LICENSE_KEY || "";
LicenseInfo.setLicenseKey(licenseKey);
export default function MuiXLicense() {
    return null;
}
