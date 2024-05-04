import { Avatar, Box, Button, CircularProgress, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, ThemeProvider, Typography } from "@mui/material"
import { FileDrop } from 'react-file-drop';
import { theme } from "../components/theme"
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRef, useState } from "react";
interface Files extends Array<{ name: string }> { }
const HomePage = () => {
    const [isFileDropped, setIsFileDropped] = useState(false)
    const [files, setFiles] = useState<Files>([])
    const [borderOpacityFiles, setBorderOpacityFiles] = useState("00")

    files.map((file) => {
        console.log(file.name)
    })

    const fileInputRef = useRef<HTMLInputElement>(null);
    const onFileInputChange = (event: { target: { files: any; }; }) => {
        const { files } = event.target;
        console.log(files[0].name)
        setIsFileDropped(true)
    }
    const onDrop = (files: any, event: any) => {
        console.log(files[0].name)
        setIsFileDropped(true)
        setBorderOpacityFiles("00")
    }
    const onTargetClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }
    const removeItem = (i: number) => {
        const newFiles = files.filter((file, index) => index !== i);
        setFiles(newFiles)
    }
    const dragEnter = () => {
        setBorderOpacityFiles("BB")
    }
    const dragLeave = () => {
        setBorderOpacityFiles("00")
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
                            <Button variant="contained" color="primary" onClick={() => { setFiles([{ name: "file1" }, { name: "file2" }, { name: "file3" }]) }}>Add Files</Button>
                            <Grid container spacing={2}>
                                <Grid item sm={8}>
                                    <Typography variant="h4">Upload new file</Typography>
                                    <Divider sx={{ height: 10 }} />

                                    <FileDrop
                                        onTargetClick={onTargetClick}
                                        onDrop={onDrop}
                                        dropEffect="copy"
                                        onFrameDragEnter={dragEnter}
                                        onFrameDragLeave={dragLeave}
                                    >
                                        <Box sx={{ width: "100%", background: "transparent", height: 200, display: "flex", justifyContent: "center", alignItems: "center", border: `1px #ffffff${borderOpacityFiles} dashed`, borderRadius: "20px", transition: "0.1s" }}>
                                            {(!isFileDropped) ? (
                                                <>
                                                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                                        <Typography variant="h5">Drag and drop your file here</Typography>
                                                        <Typography variant="h6">or</Typography>
                                                        <Typography variant="h5">Click to select file</Typography>
                                                    </Box>
                                                    <input
                                                        onChange={onFileInputChange}
                                                        ref={fileInputRef}
                                                        type="file"
                                                        className="hidden"
                                                    />
                                                </>
                                            ) :
                                                <>
                                                    <CircularProgress />
                                                </>}

                                        </Box>
                                    </FileDrop>

                                </Grid>
                                <Grid item sm={4}>
                                    <Typography variant="h4">Your files</Typography>
                                    <Divider sx={{ height: 10 }} />
                                    <Box sx={{ width: "100%", background: "transparent", height: 200, display: "flex", justifyContent: "left", alignItems: "top", borderRadius: "20px", transition: "1s" }}>

                                        <Box sx={{ display: "block", width: 300 }}>
                                            <List>
                                                <Box className="dashedBG" sx={{ height: "100px", borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <Typography variant="h6">You got no files</Typography>
                                                </Box>
                                                {files.map((file, index) => (

                                                    <ListItem
                                                        sx={{ borderRadius: "25px", background: "transparent", mt: 1, width: 300 }}
                                                        secondaryAction={
                                                            <IconButton onClick={() => { removeItem(index) }} edge="end" aria-label="delete">
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        }
                                                    >
                                                        <ListItemAvatar>
                                                            <Avatar sx={{ background: "transparent" }}>
                                                                <FolderIcon />
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText
                                                            primary={file.name}
                                                        />
                                                    </ListItem>

                                                ))}
                                            </List>
                                        </Box>
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