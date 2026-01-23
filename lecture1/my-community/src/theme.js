import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D4A574',
      light: '#E8C9A8',
      dark: '#B8956A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8B7355',
      light: '#A69076',
      dark: '#6B5642',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FDF8F3',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#4A3F35',
      secondary: '#6B5D4D',
    },
    error: {
      main: '#D32F2F',
    },
    warning: {
      main: '#F9A825',
    },
    success: {
      main: '#66BB6A',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Noto Sans KR", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#4A3F35',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#4A3F35',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#4A3F35',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#4A3F35',
    },
    body1: {
      fontSize: '1rem',
      color: '#4A3F35',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#6B5D4D',
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

export default theme;
