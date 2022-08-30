import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Avatar, Box, CircularProgress, Typography } from '@mui/material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useRouter } from 'next/router';
import Link from 'next/link';
import FaceIcon from '@mui/icons-material/Face';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const CustomizedMenus = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const router = useRouter();
  const [logOut, setLogout] = useState(false);
  // const logout = () => {
  //   setLogout(true);
  //   setTimeout(() => {
  //     expand.setRoute([]);
  //     expand.setOpen(false);
  //     setLogout(false);
  //     user.logOut();
  //     router.push('/');
  //   }, 700);
  // };

  return (
    <>
      <Button
        startIcon={
          !logOut ? (
            <Avatar
              sx={{ width: 40, height: 40 }}
              src="/images/avatar/male2_40.png"
            />
          ) : (
            <CircularProgress color="secondary" />
          )
        }
        endIcon={<ArrowDropDownOutlinedIcon />}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        sx={{
          fontSize: '13px',
          color: '#3F434A',
          backgroundColor: '#ffffff',
          px: 2,
        }}
        disabled={logOut}>
        Shirjoy Bh.
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            sx={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  sx={{ paddingBottom: '0px' }}
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}>
                  <Link href={'/profile'}>
                    <MenuItem onClick={handleClose}>
                      <Box
                        display="flex"
                        sx={{
                          alignItems: 'flex-start',
                        }}>
                        <Box mr={1}>
                          <FaceIcon />
                        </Box>
                        <Typography variant="subtitle2" color="initial">
                          My Profile
                        </Typography>
                      </Box>
                    </MenuItem>
                  </Link>
                  {/* <Divider /> */}
                  <MenuItem sx={{ paddingBottom: '0px' }}>
                    <Link href="/">
                      <Box
                        display="flex"
                        sx={{
                          alignItems: 'flex-start',
                        }}>
                        <Box mr={1}>
                          <ExitToAppIcon />
                        </Box>
                        <Typography variant="subtitle2" color="initial">
                          Log Out
                        </Typography>
                      </Box>
                    </Link>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default CustomizedMenus;
