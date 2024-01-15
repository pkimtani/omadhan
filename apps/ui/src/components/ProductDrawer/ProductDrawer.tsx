import React, { JSX } from 'react';
import {
    DrawerProps as MuiDrawerProps,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PostAddOutlined from '@mui/icons-material/PostAddOutlined';
import AccountBalanceWalletOutlined from '@mui/icons-material/AccountBalanceWalletOutlined';
import { NavLink } from 'react-router-dom';
import {
    ProductStyledDrawerHeader,
    ProductStyledDrawer,
    ProductStyledDrawerItemButton,
    ProductStyledDrawerItemIcon,
    ProductStyledDrawerItemText,
} from './ProductDrawer.style';

export interface ProductDrawerPros extends MuiDrawerProps {
    open: boolean;
    handleDrawerClose: () => void;
    drawerWidth: number;
}

const ProductDrawer = (props: ProductDrawerPros): JSX.Element => {
    return (
        <ProductStyledDrawer
            variant="permanent"
            open={props.open}
            drawerWidth={props.drawerWidth}
            handleDrawerClose={props.handleDrawerClose}
        >
            <ProductStyledDrawerHeader>
                <IconButton onClick={props.handleDrawerClose}>
                    <ChevronLeftIcon
                        sx={props.open ? {} : { display: 'none' }}
                    />
                </IconButton>
            </ProductStyledDrawerHeader>
            <Divider />
            <List>
                <NavLink to={'/'}>
                    {({ isActive }) => (
                        <ListItem disablePadding sx={{ display: 'block' }}>
                            <ProductStyledDrawerItemButton
                                open={props.open}
                                selected={isActive}
                            >
                                <ProductStyledDrawerItemIcon open={props.open}>
                                    <AccountBalanceWalletOutlined />
                                </ProductStyledDrawerItemIcon>
                                <ListItemText
                                    primary={'Holdings'}
                                    sx={{ opacity: props.open ? 1 : 0 }}
                                />
                            </ProductStyledDrawerItemButton>
                        </ListItem>
                    )}
                </NavLink>
                <NavLink to={'/market-data-providers'}>
                    {({ isActive }) => (
                        <ListItem disablePadding sx={{ display: 'block' }}>
                            <ProductStyledDrawerItemButton
                                open={props.open}
                                selected={isActive}
                            >
                                <ProductStyledDrawerItemIcon open={props.open}>
                                    <PostAddOutlined />
                                </ProductStyledDrawerItemIcon>
                                <ProductStyledDrawerItemText
                                    primary={'Data providers'}
                                    open={props.open}
                                />
                            </ProductStyledDrawerItemButton>
                        </ListItem>
                    )}
                </NavLink>
            </List>
        </ProductStyledDrawer>
    );
};

export default ProductDrawer;
