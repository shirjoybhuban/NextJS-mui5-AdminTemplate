import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Box,
  Collapse,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const SidebarTab = ({ route, router, open }) => {
  const [collapse, setCollapse] = useState(false);
  const [path, setPath] = useState(null);
  //console.log(router.pathname.split('/')[1]);
  //   useEffect(() => {
  //     setPath(route.path);
  //     setCollapse(!collapse);
  //   }, []);

  const handleRoute = () => {
    if (route.collapse) {
      setPath(route.path);
      setCollapse(!collapse);
    } else {
      setPath(route.path);
      router.push(route.path);
    }
  };
  return (
    <>
      <ListItem disablePadding sx={{ display: 'block' }} onClick={handleRoute}>
        <ListItemButton
          sx={{
            justifyContent: open ? 'initial' : 'center',
          }}
          className={
            `/${router.pathname.split('/')[1]}` == route.path
              ? 'sidebarButtonActive'
              : 'sidebarButton'
          }>
          <ListItemIcon
            className={
              `/${router.pathname.split('/')[1]}` == route.path
                ? 'sidebarIconActive'
                : 'sidebarIcon'
            }
            sx={{
              mr: open ? 3 : 'auto',
            }}>
            <route.icon size={20} />
          </ListItemIcon>
          <ListItemText
            disableTypography={true}
            primary={route.name}
            sx={{
              opacity: open ? 1 : 0,
            }}
          />
          {route.collapse && open && (
            <Box>
              {path == route.path && collapse ? <ExpandLess /> : <ExpandMore />}
            </Box>
          )}
        </ListItemButton>
      </ListItem>
      {route.collapse && (
        <Collapse
          sx={{ my: 1 }}
          in={path == route.path && collapse}
          timeout="auto"
          unmountOnExit>
          <Stack spacing={1} sx={{ pl: 8 }}>
            {route.childs.map((child) => (
              <Link href={child.path + child.childPath} key={child.id}>
                <Typography
                  variant="body2"
                  color="primary"
                  fontWeight={
                    router.pathname == child.path + child.childPath ? 700 : 400
                  }
                  sx={{ cursor: 'pointer' }}>
                  {child.name}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Collapse>
      )}
    </>
  );
};

export default SidebarTab;
