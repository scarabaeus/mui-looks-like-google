import { createTheme } from '@mui/material/styles'

const BG = '#C0C0C0'      // the silver
const WHITE = '#FFFFFF'
const BLACK = '#000000'
const DARK = '#808080'    // shadow side
const LIGHT = '#DFDFDF'   // highlight side
const NAVY = '#000080'    // title bar blue / selection
const TEXT = '#000000'
const FONT = '"MS Sans Serif", "Microsoft Sans Serif", system-ui, Arial, sans-serif'

// Raised 3D bevel — white top/left outer, dark grey bottom/right outer, inner bevel via inset shadow
const bevelRaised = {
  borderTop: `2px solid ${WHITE}`,
  borderLeft: `2px solid ${WHITE}`,
  borderRight: `2px solid ${DARK}`,
  borderBottom: `2px solid ${DARK}`,
  boxShadow: `inset -1px -1px 0 ${BLACK}, inset 1px 1px 0 ${LIGHT}`,
}

// Pressed bevel — inverted
const bevelPressed = {
  borderTop: `2px solid ${DARK}`,
  borderLeft: `2px solid ${DARK}`,
  borderRight: `2px solid ${WHITE}`,
  borderBottom: `2px solid ${WHITE}`,
  boxShadow: `inset 1px 1px 0 ${BLACK}`,
}

// Sunken bevel — for text inputs
const bevelSunken = {
  borderTop: `2px solid ${DARK}`,
  borderLeft: `2px solid ${DARK}`,
  borderRight: `2px solid ${WHITE}`,
  borderBottom: `2px solid ${WHITE}`,
  boxShadow: `inset 1px 1px 0 ${BLACK}, inset -1px -1px 0 ${LIGHT}`,
}

export const win95Theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: NAVY },
    background: { default: BG, paper: BG },
    text: { primary: TEXT, secondary: DARK },
    divider: DARK,
  },
  typography: {
    fontFamily: FONT,
    fontSize: 11,
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: BG },
      },
    },

    // ── BUTTON ─────────────────────────────────────────────────────────────────
    MuiButton: {
      defaultProps: { disableRipple: true, disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: FONT,
          fontSize: 11,
          fontWeight: 400,
          letterSpacing: 0,
          borderRadius: 0,
          minWidth: 80,
          padding: '4px 12px',
          lineHeight: 1.4,
          color: TEXT,
          transition: 'none',
          '&.Mui-focusVisible': {
            outline: `1px dotted ${BLACK}`,
            outlineOffset: -5,
          },
        },
        // Primary / "default" button: raised bevel + outer 1px black ring (Win95 default-button indicator)
        contained: {
          backgroundColor: BG,
          color: TEXT,
          ...bevelRaised,
          outline: `1px solid ${BLACK}`,
          outlineOffset: 1,
          '&:hover': { backgroundColor: BG, boxShadow: bevelRaised.boxShadow },
          '&:active': {
            ...bevelPressed,
            outline: `1px solid ${BLACK}`,
            outlineOffset: 1,
          },
        },
        // Secondary button: same bevel, no outer ring
        outlined: {
          backgroundColor: BG,
          color: TEXT,
          ...bevelRaised,
          '&:hover': { backgroundColor: BG, boxShadow: bevelRaised.boxShadow },
          '&:active': { ...bevelPressed },
        },
      },
    },

    // ── FORM LAYOUT: labels above fields ─────────────────────────────────────
    MuiFormControl: {
      styleOverrides: {
        root: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 2,
        },
      },
    },

    // ── LABEL: static, never floats ───────────────────────────────────────────
    MuiInputLabel: {
      defaultProps: { shrink: true },
      styleOverrides: {
        root: {
          position: 'static',
          transform: 'none',
          transformOrigin: 'unset',
          pointerEvents: 'none',
          fontSize: 11,
          fontFamily: FONT,
          fontWeight: 400,
          color: TEXT,
          '&.Mui-focused': { color: TEXT },
        },
        shrink: {
          position: 'static',
          transform: 'none',
          transformOrigin: 'unset',
          fontSize: 11,
          color: TEXT,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: FONT,
          fontSize: 11,
          color: TEXT,
          '&.Mui-focused': { color: TEXT },
        },
      },
    },

    // ── INPUTS — all three variants get the same sunken text-box look ─────────
    MuiInput: {
      defaultProps: { disableUnderline: true },
      styleOverrides: {
        root: {
          marginTop: '0 !important',
          width: '100%',
          backgroundColor: WHITE,
          borderRadius: 0,
          ...bevelSunken,
          transition: 'none',
          '&::before': { display: 'none' },
          '&::after': { display: 'none' },
        },
        input: {
          padding: '2px 4px',
          fontSize: 11,
          fontFamily: FONT,
          color: TEXT,
          '&::placeholder': { color: DARK, opacity: 1 },
          '&::selection': { backgroundColor: NAVY, color: WHITE },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: '100%',
          backgroundColor: WHITE,
          borderRadius: 0,
          ...bevelSunken,
          transition: 'none',
          '& fieldset': { display: 'none' },
        },
        input: {
          padding: '2px 4px',
          fontSize: 11,
          fontFamily: FONT,
          color: TEXT,
          '&::placeholder': { color: DARK, opacity: 1 },
          '&::selection': { backgroundColor: NAVY, color: WHITE },
        },
      },
    },
    MuiFilledInput: {
      defaultProps: { disableUnderline: true },
      styleOverrides: {
        root: {
          width: '100%',
          backgroundColor: WHITE,
          borderRadius: 0,
          ...bevelSunken,
          transition: 'none',
          '&::before': { display: 'none' },
          '&::after': { display: 'none' },
          '&:hover': { backgroundColor: WHITE },
          '&.Mui-focused': { backgroundColor: WHITE },
        },
        input: {
          padding: '2px 4px',
          paddingTop: 2,
          fontSize: 11,
          fontFamily: FONT,
          color: TEXT,
          '&::placeholder': { color: DARK, opacity: 1 },
          '&::selection': { backgroundColor: NAVY, color: WHITE },
        },
      },
    },

    // ── CHECKBOX ─────────────────────────────────────────────────────────────
    MuiCheckbox: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: {
          padding: 2,
          borderRadius: 0,
          color: TEXT,
          '& .MuiSvgIcon-root': { fontSize: 14 },
          '&.Mui-checked': { color: TEXT },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: 11,
          fontFamily: FONT,
          color: TEXT,
        },
      },
    },

    // ── CARD ─────────────────────────────────────────────────────────────────
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: BG,
          ...bevelRaised,
        },
      },
    },
  },
})
