import { createTheme } from '@mui/material/styles';

const theme = createTheme(
    {
        palette: {
            mode: 'light',
            primary: {
                main: '#D3D3D3FF',
                contrastText: '#ffffff'
            },
            secondary: {
                main: '#a84417',
                contrastText: '#F08080',
            },
            background: {
                default: '#f7f9fc',
                paper: '#fafafa',
            },
            error: {
                main: '#ff1000',
            },
        },
        typography: {
            fontFamily: 'Didot',
            h1: {
                letterSpacing: '0em',
                lineHeight: 1.2,
                fontSize: '2rem',
                color: '#f08080',
                fontFamily: 'Didot'
            },
            h2: {
                letterSpacing: '0em',
            },
            button: {
                fontSize: '1rem'
            },
            body1: {
                fontWeight: 500,
                fontSize: '1rem',
            },
        },
    }
);
export default theme;