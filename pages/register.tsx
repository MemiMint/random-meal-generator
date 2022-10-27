import React, { FunctionComponent } from "react";
import type { NextPage } from "next";
import Box from "@mui/joy/Box";
import RegisterForm from "../components/RegisterForm";

const Register: NextPage = () => {
    return (
        <>
            <style global jsx>{`body { 
          background: #FFE2BA;
        }`}</style>
            <Box sx={{ position: "relative", width: "100vw", height: "100vh", background: "transparent" }} >
                <RegisterForm />
            </Box>
        </>
    )
}

export default Register;