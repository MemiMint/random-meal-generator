import { useState } from "react";
import NextLink from "next/link";
import Button from '@mui/joy/Button';
import Box from "@mui/joy/Box"
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/joy/TextField';
import Typography from "@mui/joy/Typography"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Link from "@mui/joy/Link";
import React from 'react';
import { Oval } from 'react-loader-spinner'
import { useLoginForm } from "./hook"

const LoginForm = (): JSX.Element => {
    const { state, onChange, onSubmit, onTogglePasswordVisibility } = useLoginForm();

    const Eye = (): JSX.Element => {
        return state.passwordVisiblity ? <VisibilityIcon cursor="pointer" onClick={onTogglePasswordVisibility} /> : <VisibilityOffIcon cursor="pointer" onClick={onTogglePasswordVisibility} />
    }

    return (
        <Card variant="plain" sx={{ width: 420, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} >
            {state.isLoading && <CardOverflow sx={{ position: "absolute", zIndex: 2, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }} >
                <Oval
                    height={40}
                    width={40}
                    color="#FB9300"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor=""
                    strokeWidth={4}
                    strokeWidthSecondary={2}

                />
            </CardOverflow>}
            <Box sx={{ mt: 0.5, textAlign: "center", paddingX: 2 }}>
                <Typography level="h3">Login</Typography>
                <Typography level="body1" fontWeight="md" sx={{ mt: 2 }}>Hey, Enter your details to get sign in to your account</Typography>
            </Box>
            <Box sx={{
                py: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
                flexWrap: "center"
            }} >
                <TextField 
                    startDecorator={<EmailIcon />} 
                    name="email" 
                    label="Email" 
                    placeholder="Enter your username" 
                    value={state.email}
                    onChange={onChange}
                    fullWidth 
                />
                <TextField
                    name="password"
                    label="Password"
                    placeholder="Enter your pasword"
                    type={state.passwordVisiblity ? "text" : "password"}
                    value={state.password}
                    onChange={onChange}
                    fullWidth
                    endDecorator={<Eye />}
                />
            </Box>
            <NextLink href="/docs" passHref >
                <Link level="body1" fontWeight="md" sx={{ color: "#FB9300" }} >Having trouble in sign in?</Link>
            </NextLink>
            <Box sx={{
                mt: 8,
                py: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
                flexWrap: "center"
            }}
            >
                <Button sx={{ backgroundColor: "#FB9300", color: "white" }} fullWidth onClick={onSubmit} >Sign in</Button>
                <Typography level="body1" sx={{ mt: 2 }}>Don't have an account? <Link sx={{ color: "#FB9300" }} fontWeight="md">Request Now</Link></Typography>
            </Box>
        </Card>
    )
}

export default LoginForm;