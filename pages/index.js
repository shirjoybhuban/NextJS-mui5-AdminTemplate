import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Login from 'components/core/auth/Login';

export default function Home() {
  return (
    <Container disableGutters={true} maxWidth={false} sx={{ height: '100%' }}>
      <Grid container sx={{ height: '100%' }}>
        <Grid xs={6}>
          <Login />
        </Grid>
        <Grid xs={6} sx={{ height: '100%' }}>
          <div className="bg"></div>
        </Grid>
      </Grid>
    </Container>
  );
}
