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
import PersonIcon from '@mui/icons-material/Person';
import { Oval } from 'react-loader-spinner'
import { useRegisterForm } from "./hook";

const RegisterForm = (): JSX.Element => {
    const { state, onChange, onSubmit, onTogglePasswordVisibility } = useRegisterForm();

    const Eye = (): JSX.Element => {
        return state.passwordVisibility ? <VisibilityIcon cursor="pointer" onClick={onTogglePasswordVisibility} /> : <VisibilityOffIcon cursor="pointer" onClick={onTogglePasswordVisibility} />
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
                <Typography level="h3">Register</Typography>
                <Typography level="body1" fontWeight="md" sx={{ mt: 2 }}>Join us and experience the vast database of dishes in the world</Typography>
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
                    startDecorator={<PersonIcon />}
                    name="email"
                    label="Username"
                    placeholder="Enter your username"
                    value={state.email}
                    onChange={onChange}
                    fullWidth
                />
                <TextField
                    name="password"
                    label="Password"
                    placeholder="Enter your pasword"
                    type={state.passwordVisibility ? "text" : "password"}
                    value={state.password}
                    onChange={onChange}
                    fullWidth
                    endDecorator={<Eye />}
                />
                <TextField
                    name="password"
                    label="Confirm Password"
                    placeholder="Enter your pasword"
                    type={state.passwordVisibility ? "text" : "password"}
                    value={state.password}
                    onChange={onChange}
                    fullWidth
                    endDecorator={<Eye />}
                />
            </Box>
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
                <Button sx={{ backgroundColor: "#FB9300", color: "white" }} fullWidth onClick={onSubmit} >Register</Button>
            </Box>
        </Card>
    )
}

export default RegisterForm;