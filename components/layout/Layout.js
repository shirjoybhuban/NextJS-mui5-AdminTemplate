import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Divider, Stack } from '@mui/material';
import CustomizedMenus from 'components/utils/CustomizedMenus';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Search } from 'react-feather';
import Sidebar from './Sidebar';

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  border: '0px',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.03)',
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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  backgroundColor: '#ffffff',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Layout({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            backgroundColor: '#ffffff',
          }}>
          <Stack
            sx={{ width: '100%' }}
            direction="row"
            justifyContent="space-between"
            alignItems="center">
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              sx={{
                marginRight: 5,
              }}
              onClick={handleDrawer}>
              {open ? <MenuIcon /> : <ChevronRightIcon />}
            </IconButton>
            <Stack direction="row" spacing={2}>
              <IconButton edge="end">
                <Search color="#000000" size={20} />
              </IconButton>
              <IconButton edge="end">
                <NotificationsNoneOutlinedIcon sx={{ color: '#000000' }} />
              </IconButton>
              <Box pb={2}>
                <Divider orientation="vertical" variant="middle" />
              </Box>
              <CustomizedMenus />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Stack justifyContent={'flex-start'} sx={{ width: '100%', pl: 1 }}>
            <img src="/images/logo/logo.png" alt="logo" width={'140px'} />
          </Stack>
        </DrawerHeader>
        <Sidebar open={open} />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 2, backgroundColor: 'bg.body', height: '100vh' }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
