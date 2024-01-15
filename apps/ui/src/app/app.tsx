import React, { JSX } from 'react';
import { Box, Container, useMediaQuery } from '@mui/material';
import ProductAppBar from '../components/ProductAppBar';
import ProductDrawer from '../components/ProductDrawer/ProductDrawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';

const App = (): JSX.Element => {
    const [open, setOpen] = React.useState(false);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    const drawerWidth = 240;

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box display={'flex'}>
                <ProductAppBar
                    open={open}
                    handleDrawerOpen={handleDrawerOpen}
                    drawerWidth={drawerWidth}
                />
                <ProductDrawer
                    open={open}
                    handleDrawerClose={handleDrawerClose}
                    drawerWidth={drawerWidth}
                />
                <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 10 }}>
                    <Outlet />
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default App;
