import { createTheme, alpha } from '@mui/material/styles';

const BLUE = '#1C78E4';
const BG = '#EFEFF4';
const WHITE = '#FFFFFF';
const GRAY = '#8E8E93';
const BORDER = '#C8C7CC';
const TEXT = '#1C1C1E';

export const ios1Theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: BLUE },
    background: { default: BG, paper: WHITE },
    text: { primary: TEXT, secondary: GRAY },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: 17,
  },
  shape: { borderRadius: 10 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: BG },
      },
    },

    // ── GLOSSY BUTTON — the iconic iPhone OS wet-glass blue pill ─────────────
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: 0,
          borderRadius: 12,
          padding: '10px 28px',
        },
        contained: {
          position: 'relative',
          overflow: 'hidden',
          // Two-stop gradient: pale blue top half, saturated blue bottom half
          background:
            'linear-gradient(to bottom, #5AAAF5 0%, #2468E4 49%, #0C52C4 51%, #1048C0 100%)',
          color: WHITE,
          textShadow: '0 -1px 0 rgba(0,0,0,0.35)',
          border: '1px solid #0840A0',
          boxShadow:
            '0 2px 4px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.2)',
          // Wet-glass gloss on top half
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '50%',
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.07) 100%)',
            borderRadius: '12px 12px 0 0',
            pointerEvents: 'none',
          },
          '&:hover': {
            background:
              'linear-gradient(to bottom, #68B8F8 0%, #3478F0 49%, #1060D0 51%, #1850C8 100%)',
            boxShadow: '0 3px 8px rgba(0,0,0,0.4)',
          },
          '&:active': {
            background: 'linear-gradient(to bottom, #1458CC 0%, #0840A8 100%)',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
          },
        },
        outlined: {
          borderColor: BLUE,
          color: BLUE,
          fontWeight: 600,
          '&:hover': { backgroundColor: alpha(BLUE, 0.06) },
        },
      },
    },

    // ── STANDARD field — white rounded rect, inset shadow ────────────────────
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: WHITE,
          borderRadius: 10,
          border: `1px solid ${BORDER}`,
          boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.12)',
          paddingLeft: 12,
          paddingRight: 12,
          transition: 'box-shadow 0.2s, border-color 0.2s',
          '&::before': { display: 'none' },
          '&::after': { display: 'none' },
          '&.Mui-focused': {
            borderColor: BLUE,
            boxShadow: `inset 0 2px 5px rgba(0,0,0,0.12), 0 0 0 3px ${alpha(BLUE, 0.28)}`,
          },
        },
        input: {
          // Top padding makes room for the label sitting inside the box
          padding: '22px 0 8px',
          fontSize: 17,
          color: TEXT,
          '&::placeholder': { color: GRAY, opacity: 1 },
        },
      },
    },

    // ── OUTLINED field — same inset look, border on root so shadow aligns ──────
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: WHITE,
          borderRadius: 10,
          border: `1px solid ${BORDER}`,
          boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.12)',
          transition: 'box-shadow 0.2s, border-color 0.2s',
          // Fieldset's top: -5px offset misaligns the inset shadow — hide it
          '& fieldset': { display: 'none' },
          '&:hover': { borderColor: '#AEAEB2' },
          '&.Mui-focused': {
            borderColor: BLUE,
            boxShadow: `inset 0 2px 5px rgba(0,0,0,0.12), 0 0 0 3px ${alpha(BLUE, 0.28)}`,
          },
        },
        input: {
          // Same top padding as standard so value text clears the label
          padding: '22px 12px 8px',
          fontSize: 17,
          color: TEXT,
          '&::placeholder': { color: GRAY, opacity: 1 },
        },
      },
    },

    // ── FILLED field — same inset look ───────────────────────────────────────
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: WHITE,
          borderRadius: 10,
          border: `1px solid ${BORDER}`,
          boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.1)',
          transition: 'box-shadow 0.2s, border-color 0.2s',
          '&::before': { display: 'none' },
          '&::after': { display: 'none' },
          '&:hover': { backgroundColor: WHITE },
          '&.Mui-focused': {
            backgroundColor: WHITE,
            borderColor: BLUE,
            boxShadow: `inset 0 2px 5px rgba(0,0,0,0.1), 0 0 0 3px ${alpha(BLUE, 0.28)}`,
          },
        },
        input: {
          padding: '22px 12px 8px',
          fontSize: 17,
          color: TEXT,
          '&::placeholder': { color: GRAY, opacity: 1 },
        },
      },
    },

    // ── LABELS ───────────────────────────────────────────────────────────────
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: GRAY,
          fontSize: 17,
          zIndex: 1,
          '&.Mui-focused': { color: BLUE },
        },
        shrink: {
          // Standard: MUI adds 16px marginTop via `label + &`, so we add that
          // to the desired 7px offset to land the label inside the white box.
          transform: 'translate(12px, 23px) scale(0.75)',
          '&.MuiInputLabel-outlined': {
            transform: 'translate(14px, 7px) scale(0.75)',
          },
          '&.MuiInputLabel-filled': {
            transform: 'translate(12px, 7px) scale(0.75)',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: GRAY,
          '&.Mui-focused': { color: BLUE },
        },
      },
    },

    // ── CHECKBOX: styled as an iPhone OS toggle switch ───────────────────────
    MuiCheckbox: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: {
          width: 51,
          height: 31,
          padding: 0,
          flexShrink: 0,
          position: 'relative',
          borderRadius: 16,

          // Hide the MUI SVG — sizing only
          '& .MuiSvgIcon-root': { display: 'none' },

          // Track
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: 16,
            background: `linear-gradient(to bottom, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 55%), #c7c7cc`,
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.22)',
            transition: 'background 0.28s',
          },

          // Thumb
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 2,
            left: 2,
            width: 27,
            height: 27,
            borderRadius: '50%',
            backgroundColor: WHITE,
            boxShadow: '0 2px 5px rgba(0,0,0,0.35), 0 0 0 0.5px rgba(0,0,0,0.08)',
            transition: 'transform 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          },

          // Checked — track turns blue, thumb slides right
          '&.Mui-checked::before': {
            background: `linear-gradient(to bottom, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 55%), ${BLUE}`,
          },
          '&.Mui-checked::after': {
            transform: 'translateX(20px)',
          },

          '&.Mui-focusVisible::before': {
            boxShadow: `inset 0 1px 3px rgba(0,0,0,0.22), 0 0 0 3px ${alpha(BLUE, 0.28)}`,
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          gap: '1rem',
        },
        label: { fontSize: 17, color: TEXT },
      },
    },

    // ── CARD ─────────────────────────────────────────────────────────────────
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: `1px solid ${BORDER}`,
          boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
        },
      },
    },
  },
});
