import {
    CSSObject,
    ListItemButton,
    ListItemIcon,
    ListItemIconProps,
    ListItemProps,
    ListItemText,
    ListItemTextProps,
    styled,
    Theme,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { ProductDrawerPros } from './ProductDrawer';

const openedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

export const ProductStyledDrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export const ProductStyledDrawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})<ProductDrawerPros>(({ theme, open, drawerWidth }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme, drawerWidth),
        '& .MuiDrawer-paper': openedMixin(theme, drawerWidth),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

export const ProductStyledDrawerItemButton = styled(ListItemButton, {
    shouldForwardProp: (props) => props !== 'open',
})<{ open: boolean } & ListItemProps>(({ open }) => ({
    minHeight: 48,
    justifyContent: open ? 'initial' : 'center',
    px: 2.5,
}));

export const ProductStyledDrawerItemIcon = styled(ListItemIcon, {
    shouldForwardProp: (props) => props !== 'open',
})<{ open: boolean } & ListItemIconProps>(({ open }) => ({
    minWidth: 0,
    mr: open ? 3 : 'auto',
    justifyContent: 'center',
}));

export const ProductStyledDrawerItemText = styled(ListItemText, {
    shouldForwardProp: (props) => props !== 'open',
})<{ open: boolean } & ListItemTextProps>(({ open }) => ({
    opacity: open ? 1 : 0,
}));
