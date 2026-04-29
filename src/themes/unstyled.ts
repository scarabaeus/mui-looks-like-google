import { createTheme } from '@mui/material/styles';

export const unstyledTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#000000' },
    background: { default: '#ffffff', paper: '#ffffff' },
    text: { primary: '#000000' },
  },
  typography: {
    // Times New Roman is the browser's classic default serif
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: 13,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#ffffff',
          margin: 0,
        },
      },
    },

    // ── FORM CONTROL: horizontal layout so label sits left of the field ───────
    MuiFormControl: {
      styleOverrides: {
        root: {
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'nowrap',
          gap: 6,
        },
      },
    },

    // ── LABEL: static in the flow, never moves, never transforms ─────────────
    MuiInputLabel: {
      defaultProps: { shrink: false },
      styleOverrides: {
        root: {
          position: 'static',
          transform: 'none',
          pointerEvents: 'none',
          flexShrink: 0,
          width: 80,
          textAlign: 'right',
          fontSize: 13,
          fontFamily: '"Times New Roman", Times, serif',
          color: '#000',
          '&.Mui-focused': { color: '#000' },
        },
        shrink: {
          // Override everything from other themes — label never moves
          position: 'static',
          transform: 'none',
          transformOrigin: 'unset',
          fontSize: 13,
          color: '#000',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#000',
          fontFamily: '"Times New Roman", Times, serif',
          '&.Mui-focused': { color: '#000' },
        },
      },
    },

    // ── NATIVE BUTTON look (classic gray OS button) ───────────────────────────
    MuiButton: {
      defaultProps: { disableRipple: true, disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: 'system-ui, -apple-system, Arial, sans-serif',
          fontSize: 13,
          fontWeight: 400,
          letterSpacing: 0,
          borderRadius: 3,
          padding: '2px 10px',
          minWidth: 'auto',
          lineHeight: '1.6',
          color: '#000',
          backgroundColor: '#e8e8e8',
          border: '1px solid rgba(0,0,0,0.28)',
          boxShadow: 'none',
          '&:hover': { backgroundColor: '#d8d8d8', boxShadow: 'none' },
          '&:active': {
            backgroundColor: '#c8c8c8',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.2)',
          },
        },
        // All variants get the same gray-button treatment
        contained: {
          backgroundColor: '#e8e8e8',
          color: '#000',
          boxShadow: 'none',
          '&:hover': { backgroundColor: '#d8d8d8', boxShadow: 'none' },
        },
        outlined: {
          backgroundColor: '#e8e8e8',
          color: '#000',
          borderColor: 'rgba(0,0,0,0.28)',
          '&:hover': { backgroundColor: '#d8d8d8' },
        },
      },
    },

    // ── INPUTS: plain browser text box ───────────────────────────────────────
    MuiInput: {
      defaultProps: { disableUnderline: true },
      styleOverrides: {
        root: {
          // MUI adds `label + &: { marginTop: 16px }` which breaks the row alignment
          marginTop: '0 !important',
          flex: 1,
          backgroundColor: '#fff',
          border: '1px solid #767676',
          borderRadius: 2,
          padding: '1px 3px',
          fontSize: 13,
          fontFamily: 'system-ui, -apple-system, Arial, sans-serif',
          '&::before': { display: 'none' },
          '&::after': { display: 'none' },
          '&.Mui-focused': {
            outline: '2px solid #0060df',
            outlineOffset: 1,
          },
        },
        input: {
          padding: '1px 0',
          fontSize: 13,
          fontFamily: 'system-ui, -apple-system, Arial, sans-serif',
          color: '#000',
          height: 'auto',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          flex: 1,
          backgroundColor: '#fff',
          // Own border so outline aligns correctly — fieldset has top:-5px which
          // causes the focus ring to float above the visible border edge
          border: '1px solid #767676',
          borderRadius: 2,
          fontSize: 13,
          fontFamily: 'system-ui, -apple-system, Arial, sans-serif',
          '& fieldset': { display: 'none' },
          '&.Mui-focused': {
            outline: '2px solid #0060df',
            outlineOffset: 1,
          },
        },
        input: {
          padding: '2px 4px',
          fontSize: 13,
          fontFamily: 'system-ui, -apple-system, Arial, sans-serif',
          color: '#000',
        },
      },
    },
    MuiFilledInput: {
      defaultProps: { disableUnderline: true },
      styleOverrides: {
        root: {
          flex: 1,
          backgroundColor: '#fff',
          border: '1px solid #767676',
          borderRadius: 2,
          fontSize: 13,
          fontFamily: 'system-ui, -apple-system, Arial, sans-serif',
          '&::before': { display: 'none' },
          '&::after': { display: 'none' },
          '&:hover': { backgroundColor: '#fff' },
          '&.Mui-focused': {
            backgroundColor: '#fff',
            outline: '2px solid #0060df',
            outlineOffset: 1,
          },
        },
        input: {
          padding: '2px 4px',
          paddingTop: 2,
          fontSize: 13,
          fontFamily: 'system-ui, -apple-system, Arial, sans-serif',
          color: '#000',
        },
      },
    },

    // ── CHECKBOX: native-ish, no color ────────────────────────────────────────
    MuiCheckbox: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: {
          padding: 0,
          marginRight: 4,
          color: '#767676',
          '&.Mui-checked': { color: '#000' },
          '& .MuiSvgIcon-root': { fontSize: 16 },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: 13,
          fontFamily: '"Times New Roman", Times, serif',
          color: '#000',
        },
      },
    },
  },
});

