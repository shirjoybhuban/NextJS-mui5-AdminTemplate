import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import adminRoutes from 'routes/admin_routes';
import { Home, Search } from 'react-feather';
import SidebarTab from './SidebarTab';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Sidebar = ({ open }) => {
  const router = useRouter();
  return (
    <List sx={{ pr: 2 }}>
      <Link href={'/dashboard'} sx={{ textDecoration: 'none' }}>
        <ListItem
          disablePadding
          sx={{ display: 'block' }}
          // onClick={() => handleRoute('/dashboard')}
        >
          <ListItemButton
            className={
              router.pathname == '/dashboard'
                ? 'sidebarButtonActive'
                : 'sidebarButton'
            }
            sx={{
              justifyContent: open ? 'initial' : 'center',
              // '&:hover': {
              //   backgroundColor: 'primary.main',
              // },
            }}>
            <ListItemIcon
              className={
                router.pathname == '/dashboard'
                  ? 'sidebarIconActive'
                  : 'sidebarIcon'
              }
              sx={{
                mr: open ? 3 : 'auto',
              }}>
              <Home size={20} />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              primary={'Dashboard'}
              sx={{
                opacity: open ? 1 : 0,
              }}
            />
          </ListItemButton>
        </ListItem>
      </Link>

      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 50,
            color: '#0C2D05',
            fontSize: '15px',
            fontWeight: 600,
            fontFamily: 'Poppins',
            justifyContent: open ? 'initial' : 'center',
          }}>
          <ListItemText
            disableTypography={true}
            primary={'FBA Manager'}
            sx={{
              opacity: open ? 1 : 0,
            }}
          />
        </ListItemButton>
      </ListItem>
      {adminRoutes.map((route) => (
        <SidebarTab route={route} router={router} open={open} key={route.id} />
      ))}
    </List>
  );
};

export default Sidebar;
