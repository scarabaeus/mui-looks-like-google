import { createTheme } from '@mui/material/styles';

// shadcn/ui "zinc" default palette — exact CSS variable values
const BACKGROUND = '#ffffff';
const FOREGROUND = '#09090b'; // zinc-950
const MUTED = '#f4f4f5'; // zinc-100
const MUTED_FG = '#71717a'; // zinc-500
const BORDER = '#e4e4e7'; // zinc-200
const PRIMARY = '#18181b'; // zinc-900
const PRIMARY_FG = '#fafafa'; // zinc-50
const RING = '#18181b'; // zinc-900

const INTER =
  '"Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif';

// focus-visible:ring-2 ring-ring ring-offset-2 — 2px white gap, 4px dark ring
const FOCUS_RING = `0 0 0 2px ${BACKGROUND}, 0 0 0 4px ${RING}`;

export const shadcnTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: PRIMARY, contrastText: PRIMARY_FG },
    background: { default: BACKGROUND, paper: BACKGROUND },
    text: { primary: FOREGROUND, secondary: MUTED_FG },
    divider: BORDER,
  },
  typography: {
    fontFamily: INTER,
    fontSize: 14,
  },
  shape: { borderRadius: 6 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: BACKGROUND },
      },
    },

    // ── BUTTON ─────────────────────────────────────────────────────────────────
    MuiButton: {
      defaultProps: { disableRipple: true, disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: INTER,
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: 0,
          borderRadius: 6,
          height: 36,
          padding: '0 16px',
          lineHeight: 1,
          transition: 'background-color 0.15s',
          '&.Mui-focusVisible': {
            outline: 'none',
            boxShadow: FOCUS_RING,
          },
        },
        // shadcn default: near-black fill, near-white text
        contained: {
          backgroundColor: PRIMARY,
          color: PRIMARY_FG,
          boxShadow: 'none',
          '&:hover': { backgroundColor: '#27272a', boxShadow: 'none' }, // zinc-800
          '&:active': { backgroundColor: '#3f3f46', boxShadow: 'none' }, // zinc-700
        },
        // shadcn outline: white bg, zinc border — hover reveals muted fill
        outlined: {
          backgroundColor: BACKGROUND,
          color: FOREGROUND,
          border: `1px solid ${BORDER}`,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: MUTED,
            borderColor: BORDER,
            boxShadow: 'none',
          },
          '&:active': { backgroundColor: '#e4e4e7' },
        },
      },
    },

    // ── FORM LAYOUT: label stacked above input, space-y-2 equivalent ──────────
    MuiFormControl: {
      styleOverrides: {
        root: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 6,
        },
      },
    },

    // ── LABEL: text-sm font-medium, static ────────────────────────────────────
    MuiInputLabel: {
      defaultProps: { shrink: true },
      styleOverrides: {
        root: {
          position: 'static',
          transform: 'none',
          transformOrigin: 'unset',
          pointerEvents: 'none',
          fontFamily: INTER,
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1,
          color: FOREGROUND,
          '&.Mui-focused': { color: FOREGROUND },
        },
        shrink: {
          position: 'static',
          transform: 'none',
          transformOrigin: 'unset',
          fontSize: 14,
          color: FOREGROUND,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: INTER,
          fontSize: 14,
          fontWeight: 500,
          color: FOREGROUND,
          '&.Mui-focused': { color: FOREGROUND },
        },
      },
    },

    // ── INPUTS: h-9, rounded-md, zinc-200 border, dark 2+2 focus ring ─────────
    MuiInput: {
      defaultProps: { disableUnderline: true },
      styleOverrides: {
        root: {
          // Cancel MUI's `label + &: { marginTop: 16px }` rule
          marginTop: '0 !important',
          width: '100%',
          height: 36,
          backgroundColor: BACKGROUND,
          borderRadius: 6,
          border: `1px solid ${BORDER}`,
          paddingLeft: 12,
          paddingRight: 12,
          transition: 'box-shadow 0.15s',
          '&::before': { display: 'none' },
          '&::after': { display: 'none' },
          '&:hover': { borderColor: BORDER },
          '&.Mui-focused': { outline: 'none', boxShadow: FOCUS_RING },
        },
        input: {
          padding: 0,
          height: '100%',
          fontFamily: INTER,
          fontSize: 14,
          color: FOREGROUND,
          '&::placeholder': { color: MUTED_FG, opacity: 1 },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: '100%',
          height: 36,
          backgroundColor: BACKGROUND,
          borderRadius: 6,
          border: `1px solid ${BORDER}`,
          transition: 'box-shadow 0.15s',
          '& fieldset': { display: 'none' },
          '&:hover': { borderColor: BORDER },
          '&.Mui-focused': { outline: 'none', boxShadow: FOCUS_RING },
        },
        input: {
          padding: '0 12px',
          height: '100%',
          fontFamily: INTER,
          fontSize: 14,
          color: FOREGROUND,
          '&::placeholder': { color: MUTED_FG, opacity: 1 },
        },
      },
    },
    MuiFilledInput: {
      defaultProps: { disableUnderline: true },
      styleOverrides: {
        root: {
          width: '100%',
          height: 36,
          backgroundColor: BACKGROUND,
          borderRadius: 6,
          border: `1px solid ${BORDER}`,
          transition: 'box-shadow 0.15s',
          '&::before': { display: 'none' },
          '&::after': { display: 'none' },
          '&:hover': { backgroundColor: BACKGROUND },
          '&.Mui-focused': {
            backgroundColor: BACKGROUND,
            outline: 'none',
            boxShadow: FOCUS_RING,
          },
        },
        input: {
          padding: '0 12px',
          paddingTop: 0,
          height: '100%',
          fontFamily: INTER,
          fontSize: 14,
          color: FOREGROUND,
          '&::placeholder': { color: MUTED_FG, opacity: 1 },
        },
      },
    },

    // ── CHECKBOX ─────────────────────────────────────────────────────────────
    MuiCheckbox: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: {
          padding: 4,
          borderRadius: 4,
          color: BORDER,
          transition: 'color 0.15s',
          '&.Mui-checked': { color: PRIMARY },
          '&.Mui-focusVisible': { boxShadow: FOCUS_RING },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: INTER,
          fontSize: 14,
          fontWeight: 400,
          color: FOREGROUND,
        },
      },
    },

    // ── CARD ─────────────────────────────────────────────────────────────────
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: `1px solid ${BORDER}`,
          boxShadow: 'none',
          backgroundColor: BACKGROUND,
        },
      },
    },
  },
});

