import React from "react"
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";

const RecoveryAccountForm = () => {
    return (
        <Card variant="plain" sx={{ width: 420, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} >
            <Box sx={{ mt: 0.5, textAlign: "center", paddingX: 2 }}>
                <Typography level="h3">Account Recovery</Typography>
                <Typography level="body1" fontWeight="md" sx={{ mt: 2 }}>Type your email associated to your account</Typography>
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
                    placeholder="Enter your username"
                    fullWidth
                />
            </Box>
            <Button sx={{ backgroundColor: "#FB9300" }} fullWidth>Send recovery email</Button>
        </Card>
    )
}

export default RecoveryAccountForm;