import { Paper, Container, Typography } from "@mui/material"


const Footer = () => {
    return (
        <>
            <Paper sx={{ p: 2, mt: 4 }}>
                <Container>
                    <Typography variant="body2" align="center">
                        © 2025 Stefan Rössel. All rights reserved.
                    </Typography>
                </Container>
            </Paper>
        </>
    )
}

export default Footer;