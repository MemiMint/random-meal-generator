import type { NextPage } from "next";
import React from "react";
import Box from "@mui/joy/Box";
import RecoveryAccountForm from "../components/RecoveryAccountForm";

const AccountRecovery: NextPage = () => {
    return (
        <>
            <style global jsx>{`body { 
                background: #FFE2BA;
            }`}</style>
            <Box sx={{ position: "relative", width: "100vw", height: "100vh", background: "transparent" }} >
                <RecoveryAccountForm />
            </Box>
        </>
    )
}

export default AccountRecovery;