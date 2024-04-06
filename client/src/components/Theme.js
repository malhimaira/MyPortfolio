import { blueGrey, red } from '@mui/material/colors';
import { createTheme, experimental_sx as sx } from '@mui/material/styles';

const theme = createTheme(
    {
        palette: {
            mode: 'light',
            primary: {
                main: '#dcdcdc',
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
                fontSize: '2em'
            },
            button: {
                fontSize: '1rem'
            },
            body1: {
                fontWeight: 500,
                fontSize: '1rem',
            },
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: sx({
                        mb: 2, 
                        p:2,
                        outline: 'none',
                        borderRadius: '2px'
                    })
                }
            },
            MuiModal:{
                styleOverrides: {
                    root: sx({
                        p: "12.5%",
                        border: 'none',
                        minWidth: '80%', 
                        maxWidth: '80%',
                        minHeight: '80%',
                        maxHeight: '80%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'auto'
                    })
                }
            }
        },
    }
);
export default theme;