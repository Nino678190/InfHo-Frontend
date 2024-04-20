import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useStore from "../store";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  createTheme,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  SwipeableDrawer,
  Box,
  ListSubheader,
  ThemeProvider
} from '@mui/material';

import { theme, colors } from "../components/theme"
import { useState } from "react";
import axios from "axios";

const Header = () => {
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [showLogoutSpinner, setShowLogoutSpinner] = useState(false);

    return (
    <>
      <ThemeProvider theme={theme}>
        <Button>Hallo</Button>
      </ThemeProvider>
    </>
  )
};


export default Header;
