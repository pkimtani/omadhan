import React, { JSX } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {IconButton, styled, Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';

interface ProductAppBarPros extends MuiAppBarProps {
  open: boolean;
  handleDrawerOpen: () => void;
  drawerWidth: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<ProductAppBarPros>(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const ProductAppBar = (props: ProductAppBarPros): JSX.Element => {
  return <React.Fragment>
    <CssBaseline />
    <AppBar open={props.open} handleDrawerOpen={props.handleDrawerOpen} drawerWidth={props.drawerWidth} elevation={4}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={props.handleDrawerOpen}
          sx={{
            marginRight: 5,
            ...(props.open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          OmaDhan
        </Typography>
      </Toolbar>
    </AppBar>
    <Toolbar />
  </React.Fragment>;
};

export default ProductAppBar;
