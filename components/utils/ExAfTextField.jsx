import styled from '@emotion/styled';
import { alpha, InputBase } from '@mui/material';

export const ExAfTextField = styled(InputBase)(
  ({ theme, bordercolor = '#E8E9EB', borderradius = 15 }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: borderradius,
      position: 'relative',
      backgroundColor: '#FFFFFF',
      border: '1px solid',
      borderColor: bordercolor,
      fontSize: 16,
      padding: '6px 12px 10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.2)} 0 0 0 0.2rem`,
        bordercolor: theme.palette.primary.main,
      },
    },
  })
);
