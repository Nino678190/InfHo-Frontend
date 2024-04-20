import { Avatar, Box, Button, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, ThemeProvider, Typography } from "@mui/material"
import { FileDrop } from 'react-file-drop';
import { theme } from "../components/theme"
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRef, useState } from "react";

const HomePage = () => {
    console.log("123")


    const fileInputRef = useRef<HTMLInputElement>(null);
    const onFileInputChange = (event: { target: { files: any; }; }) => {
        const { files } = event.target;
        // do something with your files...
    }
    const onTargetClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }


    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "start", height: "100vh" }}>
                    <Box display={"block"}>
                        <Typography variant="h1">InfHo File Uploader</Typography>
                        <Typography variant="h4">All files in one place</Typography>
                        <Button variant="contained" color="primary" sx={{ mt: 2 }}>Get Started</Button>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item sm={8}>
                                    <Typography variant="h4">Upload new file</Typography>
                                    <Divider sx={{ height: 10 }} />

                                    <FileDrop
                                        onTargetClick={onTargetClick}>
                                        <Box sx={{ width: "100%", background: "transparent", height: 200, display: "flex", justifyContent: "center", alignItems: "center", border: "1px white dashed", borderRadius: "20px" }}>
                                            <Typography variant="h5">Drag and drop your file here</Typography>
                                            <input
                                                onChange={onFileInputChange}
                                                ref={fileInputRef}
                                                type="file"
                                                className="hidden"
                                            />
                                        </Box>
                                    </FileDrop>

                                </Grid>
                                <Grid item sm={4}>
                                    <Typography variant="h4">Your files</Typography>
                                    <Divider sx={{ height: 10 }} />
                                    <Box sx={{ width: "100%", background: "transparent", height: 200, display: "flex", justifyContent: "center", alignItems: "center", border: "1px white dashed", borderRadius: "20px" }}>


                                        <List >
                                            <ListItem
                                                secondaryAction={
                                                    <IconButton edge="end" aria-label="delete">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                }
                                            >
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <FolderIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Single-line item"
                                                />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider >
        </>
    )
}

export default HomePage;