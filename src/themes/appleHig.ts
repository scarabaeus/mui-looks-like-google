import { createTheme } from '@mui/material/styles';

const GRAD = 'linear-gradient(135deg, #D45730 0%, #C13D68 100%)';
const WHITE = '#FFFFFF';
const SF = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"SF Pro Text"',
  '"SF Pro Display"',
  '"Helvetica Neue"',
  '"Inter Variable"',
  'Inter',
  'Arial',
  'sans-serif',
].join(', ');

// Dark translucent glass — gradient bleeds through
const GLASS = 'rgba(0,0,0,0.28)';
const GLASS_HOVER = 'rgba(0,0,0,0.20)';
const GLASS_ACTIVE = 'rgba(0,0,0,0.38)';
const GLASS_BORDER = 'rgba(255,255,255,0.18)';
const GLASS_BORDER_FOCUS = 'rgba(255,255,255,0.60)';
const GLASS_FOCUS_RING = '0 0 0 3px rgba(255,255,255,0.28)';

// Text on the gradient background
const LABEL = 'rgba(255,255,255,0.75)';
// Text inside glass fields
const FIELD_TEXT = WHITE;
const PLACEHOLDER = 'rgba(255,255,255,0.50)';

const GLASS_FIELD_STYLES = {
  background: 'rgba(0,0,0,0.22)',
  backdropFilter: 'blur(20px) saturate(1.4)',
  WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
  border: `1px solid ${GLASS_BORDER}`,
  borderRadius: 10,
  transition: 'box-shadow 0.15s, border-color 0.15s',
};

export const appleHigTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: WHITE },
    background: { default: '#C94B4C', paper: 'rgba(0,0,0,0.28)' },
    text: { primary: WHITE, secondary: LABEL },
  },
  typography: {
    fontFamily: SF,
    fontSize: 14,
  },
  shape: { borderRadius: 10 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: GRAD,
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
        },
      },
    },

    // ── BUTTON — dark glass squircle, white text ───────────────────────────────
    MuiButton: {
      defaultProps: { disableElevation: true, disableRipple: true },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: SF,
          fontSize: 15,
          fontWeight: 600,
          letterSpacing: 0,
          borderRadius: 20,
          padding: '10px 28px',
          lineHeight: 1.4,
          color: WHITE,
          background: GLASS,
          backdropFilter: 'blur(24px) saturate(1.4)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
          border: `1px solid ${GLASS_BORDER}`,
          boxShadow: 'none',
          transition: 'background 0.15s',
          '&:hover': { background: GLASS_HOVER, boxShadow: 'none' },
          '&:active': { background: GLASS_ACTIVE, boxShadow: 'none' },
          '&.Mui-focusVisible': {
            boxShadow: GLASS_FOCUS_RING,
            borderColor: GLASS_BORDER_FOCUS,
          },
        },
        // Both variants share the same glass — override any MUI defaults
        contained: { color: WHITE },
        outlined: { color: WHITE, borderColor: GLASS_BORDER },
      },
    },

    // ── FORM LAYOUT: label above field ────────────────────────────────────────
    MuiFormControl: {
      styleOverrides: {
        root: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 4,
        },
      },
    },

    // ── LABEL: sits on the gradient above the glass field ─────────────────────
    MuiInputLabel: {
      defaultProps: { shrink: true },
      styleOverrides: {
        root: {
          position: 'static',
          transform: 'none',
          transformOrigin: 'unset',
          pointerEvents: 'none',
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: 0.1,
          color: LABEL,
          '&.Mui-focused': { color: WHITE },
        },
        shrink: {
          position: 'static',
          transform: 'none',
          transformOrigin: 'unset',
          fontSize: 12,
          color: LABEL,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: SF,
          color: LABEL,
          '&.Mui-focused': { color: WHITE },
        },
      },
    },

    // ── STANDARD field ────────────────────────────────────────────────────────
    MuiInput: {
      defaultProps: { disableUnderline: true },
      styleOverrides: {
        root: {
          ...GLASS_FIELD_STYLES,
          // MUI adds `label + &: { marginTop: 16px }` — kill it
          marginTop: '0 !important',
          width: '100%',
          paddingLeft: 10,
          paddingRight: 10,
          '&::before': { display: 'none' },
          '&::after': { display: 'none' },
          '&.Mui-focused': {
            borderColor: GLASS_BORDER_FOCUS,
            boxShadow: GLASS_FOCUS_RING,
          },
        },
        input: {
          padding: '7px 0',
          fontSize: 14,
          color: FIELD_TEXT,
          '&::placeholder': { color: PLACEHOLDER, opacity: 1 },
        },
      },
    },

    // ── OUTLINED field ────────────────────────────────────────────────────────
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          ...GLASS_FIELD_STYLES,
          width: '100%',
          // Fieldset top:-5px breaks border alignment — hide it
          '& fieldset': { display: 'none' },
          '&:hover': { borderColor: 'rgba(255,255,255,0.30)' },
          '&.Mui-focused': {
            borderColor: GLASS_BORDER_FOCUS,
            boxShadow: GLASS_FOCUS_RING,
          },
        },
        input: {
          padding: '7px 10px',
          fontSize: 14,
          color: FIELD_TEXT,
          '&::placeholder': { color: PLACEHOLDER, opacity: 1 },
        },
      },
    },

    // ── FILLED field ──────────────────────────────────────────────────────────
    MuiFilledInput: {
      defaultProps: { disableUnderline: true },
      styleOverrides: {
        root: {
          ...GLASS_FIELD_STYLES,
          width: '100%',
          '&::before': { display: 'none' },
          '&::after': { display: 'none' },
          '&:hover': { background: 'rgba(0,0,0,0.22)' },
          '&.Mui-focused': {
            background: 'rgba(0,0,0,0.22)',
            borderColor: GLASS_BORDER_FOCUS,
            boxShadow: GLASS_FOCUS_RING,
          },
        },
        input: {
          padding: '7px 10px',
          paddingTop: 7,
          fontSize: 14,
          color: FIELD_TEXT,
          '&::placeholder': { color: PLACEHOLDER, opacity: 1 },
        },
      },
    },

    // ── CHECKBOX ─────────────────────────────────────────────────────────────
    MuiCheckbox: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: {
          padding: 4,
          color: LABEL,
          borderRadius: 4,
          '&.Mui-checked': { color: WHITE },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
        label: {
          fontSize: 14,
          fontFamily: SF,
          color: WHITE,
        },
      },
    },

    // ── CARD ─────────────────────────────────────────────────────────────────
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: GLASS,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${GLASS_BORDER}`,
          boxShadow: 'none',
          color: WHITE,
        },
      },
    },
  },
});

