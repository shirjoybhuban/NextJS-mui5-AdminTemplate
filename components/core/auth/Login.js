import {
  Avatar,
  FormControl,
  InputLabel,
  Stack,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { ExAfTextField } from 'components/utils/ExAfTextField';
import Link from 'next/link';

const Login = () => {
  return (
    <Stack
      spacing={2}
      sx={{ height: '100%' }}
      alignItems="center"
      justifyContent="center">
      <Box mb={10}>
        <img src="/images/logo/logo.png" alt="logo" />
      </Box>
      <Avatar
        sx={{ width: 100, height: 100 }}
        alt="avatar"
        variant="rounded"
        src="/images/avatar/male1_150.png"
      />
      <Typography variant="h4" fontSize={29} fontWeight={700}>
        Hi ! Shirjoy Bhuban
      </Typography>
      <Typography variant="body2" fontWeight={400} color="text.light">
        Enter your password to get acess.
      </Typography>
      <FormControl
        variant="standard"
        sx={{ width: '400px', maxWidth: '100%', mt: '30px !important' }}>
        <InputLabel shrink htmlFor="binput">
          Password
        </InputLabel>
        <ExAfTextField
          fullWidth
          id="binput"
          bordercolor="#478939"
          borderradius={5}
        />
      </FormControl>
      <Link href="/dashboard">
        <Button
          variant="contained"
          size="medium"
          sx={{ borderRadius: '5px', width: '200px', mt: '25px !important' }}>
          Login
        </Button>
      </Link>
    </Stack>
  );
};

export default Login;
