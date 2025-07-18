import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#8B3A3A',
            light: '#C27C7C',
            dark: '#5E1E1E',
            contrastText: '#fff',
        },
        secondary: {
            main: '#d4af37',
            light: '#f1e3a1',
            dark: '#a98627',
            contrastText: ' #2b2b2b',
        },
        background: {
            default: '#fff8f2',
            paper: '#fefcf9',
        },
        text: {
            primary: '#4b3c2a',
            secondary: '#947e91',
        },
        divider: '#e6d3b3',
    },
    typography: {
        fontFamily: `'Libre Baskerville, serif '`,
        h1: {
            fontWeight: 700,
            fontSize: '3rem',
            letterSpacing: '0.03em',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2.25rem',
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
        },
        button: {
            textTransform: 'none',
            fontWeight: 500,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    boxShadow: 'none',
                    padding: '8px 24px',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    backgroundColor: '#fff8f2',
                },
                notchedOutline: {
                    borderColor: '#e6d3b3',
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: '#4b3c2a',
                    color: '#fef9f3',
                    fontSize: '0.875rem',
                },
                arrow: {
                    color: '#4b3c2a',
                },
            },
        },
    },
});

export default theme;
