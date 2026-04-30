import { createTheme } from '@mui/material/styles';

const BLACK        = '#121212';              // page background
const SURFACE      = '#242424';              // inputs / elevated surfaces
const GREEN        = '#1DB954';              // the green
const GREEN_HOVER  = '#1ED760';              // hover state
const WHITE        = '#FFFFFF';
const SUBDUED      = '#A7A7A7';              // secondary text / placeholder
const BORDER       = 'rgba(255,255,255,0.2)';
const BORDER_HOVER = 'rgba(255,255,255,0.6)';
const FONT         = '"Inter Variable", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif';

export const spotifyTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: GREEN, contrastText: BLACK },
    background: { default: BLACK, paper: SURFACE },
    text: { primary: WHITE, secondary: SUBDUED },
    divider: BORDER,
  },
  typography: {
    fontFamily: FONT,
    fontSize: 16,
  },
  shape: { borderRadius: 4 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: BLACK },
      },
    },

    // ── BUTTONS: pill-shaped — the most distinctive Spotify UI element ─────────
    MuiButton: {
      defaultProps: { disableRipple: true, disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: FONT,
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: 0,
          borderRadius: 500,
          height: 48,
          padding: '0 32px',
          minWidth: 120,
          transition: 'background-color 0.15s, transform 0.1s',
          '&:active': { transform: 'scale(0.97)' },
        },
        contained: {
          backgroundColor: GREEN,
          color: BLACK,
          boxShadow: 'none',
          '&:hover': { backgroundColor: GREEN_HOVER, boxShadow: 'none' },
        },
        outlined: {
          color: WHITE,
          border: `1px solid ${BORDER_HOVER}`,
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.06)',
            border: `1px solid ${WHITE}`,
          },
        },
      },
    },

    // ── FORM LAYOUT: label stacked above input ────────────────────────────────
    MuiFormControl: {
      styleOverrides: {
        root: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 8,
        },
      },
    },

    // ── LABEL: bold, static, never floats ─────────────────────────────────────
    MuiInputLabel: {
      defaultProps: { shrink: true },
      styleOverrides: {
        root: {
          position: 'static',
          transform: 'none',
          transformOrigin: 'unset',
          pointerEvents: 'none',
          fontFamily: FONT,
          fontSize: 14,
          fontWeight: 700,
          lineHeight: 1,
          color: WHITE,
          '&.Mui-focused': { color: WHITE },
        },
        shrink: {
          position: 'static',
          transform: 'none',
          transformOrigin: 'unset',
          color: WHITE,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: FONT,
          fontSize: 14,
          fontWeight: 700,
          color: WHITE,
          '&.Mui-focused': { color: WHITE },
        },
      },
    },

    // ── INPUTS: all three variants share the same Spotify form-field look ──────
    MuiInput: {
      defaultProps: { disableUnderline: true },
      styleOverrides: {
        root: {
          marginTop: '0 !important',
          width: '100%',
          height: 48,
          backgroundColor: SURFACE,
          borderRadius: 4,
          border: `1px solid ${BORDER}`,
          paddingLeft: 16,
          paddingRight: 16,
          transition: 'border-color 0.15s',
          '&::before': { display: 'none' },
          '&::after':  { display: 'none' },
          '&:hover':       { borderColor: BORDER_HOVER },
          '&.Mui-focused': { borderColor: WHITE },
        },
        input: {
          padding: 0,
          height: '100%',
          fontFamily: FONT,
          fontSize: 16,
          color: WHITE,
          '&::placeholder': { color: SUBDUED, opacity: 1 },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: '100%',
          height: 48,
          backgroundColor: SURFACE,
          borderRadius: 4,
          border: `1px solid ${BORDER}`,
          transition: 'border-color 0.15s',
          '& fieldset': { display: 'none' },
          '&:hover':       { borderColor: BORDER_HOVER },
          '&.Mui-focused': { borderColor: WHITE },
        },
        input: {
          padding: '0 16px',
          height: '100%',
          fontFamily: FONT,
          fontSize: 16,
          color: WHITE,
          '&::placeholder': { color: SUBDUED, opacity: 1 },
        },
      },
    },
    MuiFilledInput: {
      defaultProps: { disableUnderline: true },
      styleOverrides: {
        root: {
          width: '100%',
          height: 48,
          backgroundColor: SURFACE,
          borderRadius: 4,
          border: `1px solid ${BORDER}`,
          transition: 'border-color 0.15s',
          '&::before': { display: 'none' },
          '&::after':  { display: 'none' },
          '&:hover':       { backgroundColor: SURFACE, borderColor: BORDER_HOVER },
          '&.Mui-focused': { backgroundColor: SURFACE, borderColor: WHITE },
        },
        input: {
          padding: '0 16px',
          paddingTop: 0,
          height: '100%',
          fontFamily: FONT,
          fontSize: 16,
          color: WHITE,
          '&::placeholder': { color: SUBDUED, opacity: 1 },
        },
      },
    },

    // ── CHECKBOX: green when checked ──────────────────────────────────────────
    MuiCheckbox: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: {
          padding: 4,
          color: SUBDUED,
          borderRadius: 2,
          '&.Mui-checked': { color: GREEN },
          '& .MuiSvgIcon-root': { fontSize: 20 },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: FONT,
          fontSize: 14,
          fontWeight: 400,
          color: WHITE,
        },
      },
    },

    // ── CARD ─────────────────────────────────────────────────────────────────
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: SURFACE,
          borderRadius: 8,
          boxShadow: 'none',
        },
      },
    },
  },
});
