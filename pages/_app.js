import '../styles/global.css';
import Head from 'next/head';
import { wrapper } from '../store/store';
import { exafTheme } from 'components/theme/ExAfTheme';
import { ThemeProvider } from '@mui/material';

const ViewPort = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

const App = (props) => {
  return (
    <ThemeProvider theme={exafTheme}>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Digital Insurance System" />
        <meta name="keywords" content="insurance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ExAf</title>
      </Head>
      <ViewPort {...props} />
    </ThemeProvider>
  );
};
export default wrapper.withRedux(App);
