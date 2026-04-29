import { createTheme, alpha } from '@mui/material/styles'

const PONG_BLACK = '#0a0a0a'
const PONG_WHITE = '#f0f0f0'
const STAR_GOLD = '#FFD700'
const STAR_GLOW = '#FFA500'

export const ridiculousnessTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: PONG_WHITE },
    secondary: { main: STAR_GOLD },
    background: { default: PONG_BLACK, paper: '#111' },
    text: { primary: PONG_WHITE },
  },
  typography: {
    fontFamily: '"Courier New", Courier, monospace',
  },
  components: {
    // ── BUTTONS: contained = Pong court, outlined = simple dashed ───────────
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Courier New", Courier, monospace',
          fontWeight: 900,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          borderRadius: 0,
          border: '2px solid ' + PONG_WHITE,
        },
        contained: {
          // The button IS the Pong court. Paddles live on left/right edges.
          // Text is the ball — it slides left→right→left via paddingLeft.
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: PONG_BLACK,
          color: PONG_WHITE,
          width: 150,
          height: 48,
          minWidth: 'unset',
          justifyContent: 'flex-start',
          whiteSpace: 'nowrap',
          padding: '0 20px',
          boxShadow: 'none',

          // span wrapping the label is the "ball" — slides between the paddles
          '& > span': {
            display: 'inline-block',
            animation: 'pongBall 1.4s ease-in-out infinite alternate',
          },

          '@keyframes pongBall': {
            '0%':   { transform: 'translateX(0px)' },
            '100%': { transform: 'translateX(42px)' },
          },
          '@keyframes pongPaddleLeft': {
            '0%':   { top: '8%' },
            '100%': { top: '52%' },
          },
          '@keyframes pongPaddleRight': {
            '0%':   { top: '52%' },
            '100%': { top: '8%' },
          },

          // left paddle
          '&::before': {
            content: '""',
            position: 'absolute',
            left: 6,
            width: 5,
            height: '40%',
            backgroundColor: PONG_WHITE,
            animation: 'pongPaddleLeft 1.4s ease-in-out infinite alternate',
          },
          // right paddle
          '&::after': {
            content: '""',
            position: 'absolute',
            right: 6,
            width: 5,
            height: '40%',
            backgroundColor: PONG_WHITE,
            animation: 'pongPaddleRight 1.4s ease-in-out infinite alternate',
          },

          '&:hover': {
            backgroundColor: alpha(PONG_WHITE, 0.08),
            boxShadow: '0 0 12px ' + alpha(PONG_WHITE, 0.3),
          },
        },
        outlined: {
          backgroundColor: 'transparent',
          color: PONG_WHITE,
          border: '2px dashed ' + PONG_WHITE,
          '&:hover': { backgroundColor: alpha(PONG_WHITE, 0.06) },
        },
      },
    },

    // ── INPUT LABEL: never shrinks (scale stays 1) ───────────────────────────
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.MuiInputLabel-outlined': {
            color: '#9C27B0',
            animation: 'spinField 8s linear infinite',
            '&.Mui-focused': { color: '#E040FB' },
          },
        },
        shrink: {
          // standard: ride the left edge of the star — 17° = atan(11/35) lean from vertical
          transform: 'translate(0, 12px) rotate(-17deg)',
          transformOrigin: 'center center',
          '&.MuiInputLabel-outlined': {
            transform: 'translate(14px, -9px) scale(1)',
            transformOrigin: 'unset',
          },
          '&.MuiInputLabel-filled': {
            transform: 'translate(12px, 7px) scale(1)',
            transformOrigin: 'unset',
          },
        },
      },
    },

    // ── STANDARD text field looks like a STAR ───────────────────────────────
    MuiInput: {
      styleOverrides: {
        root: {
          '&::before': { display: 'none' },
          '&::after': { display: 'none' },
        },
        input: {
          clipPath:
            'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          backgroundColor: STAR_GOLD,
          color: PONG_BLACK,
          fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
          fontWeight: 900,
          textAlign: 'center',
          padding: '28px 10px 10px',
          minHeight: 90,
          caretColor: PONG_BLACK,
          '&::placeholder': { color: alpha(PONG_BLACK, 0.5) },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: STAR_GOLD,
          fontWeight: 700,
          '&.Mui-focused': { color: STAR_GLOW },
        },
      },
    },

    // ── OUTLINED text field looks like a SPIRAL ──────────────────────────────
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '50% 20% 50% 20% / 20% 50% 20% 50%',
          background: `radial-gradient(ellipse at center, ${alpha('#7B2FBE', 0.15)} 0%, transparent 70%)`,
          animation: 'spiralPulse 4s ease-in-out infinite, spinField 8s linear infinite',
          '@keyframes spinField': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
          },
          '@keyframes spiralPulse': {
            '0%': { borderRadius: '50% 20% 50% 20% / 20% 50% 20% 50%' },
            '25%': { borderRadius: '20% 50% 20% 50% / 50% 20% 50% 20%' },
            '50%': { borderRadius: '50% 30% 50% 30% / 30% 50% 30% 50%' },
            '75%': { borderRadius: '30% 50% 30% 50% / 50% 30% 50% 30%' },
            '100%': { borderRadius: '50% 20% 50% 20% / 20% 50% 20% 50%' },
          },
          '& fieldset': {
            borderColor: '#9C27B0',
            borderWidth: 3,
            borderStyle: 'dashed',
            borderRadius: 'inherit',
            '& legend': { display: 'none' },
          },
          '&:hover fieldset': {
            borderColor: '#CE93D8',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#E040FB',
            boxShadow: '0 0 0 4px ' + alpha('#E040FB', 0.25),
          },
        },
        input: {
          color: '#E040FB',
          fontWeight: 700,
          textAlign: 'center',
          caretColor: '#E040FB',
          '&::placeholder': { color: alpha('#CE93D8', 0.5) },
        },
      },
    },

    // ── FILLED text field: VHS GLITCH ────────────────────────────────────────
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: PONG_BLACK,
          borderRadius: '2px 2px 0 0',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': { backgroundColor: '#111' },
          '&.Mui-focused': { backgroundColor: '#0d0d0d' },

          '@keyframes glitchJitter': {
            '0%, 50%, 100%': { transform: 'none', filter: 'none' },
            '51%': { transform: 'translateX(-14px) skewX(-6deg)', filter: 'brightness(3) hue-rotate(90deg)' },
            '52%': { transform: 'translateX(14px) skewX(4deg)',   filter: 'brightness(1) hue-rotate(270deg) invert(0.15)' },
            '53%': { transform: 'translateX(-10px)',               filter: 'brightness(2.5) hue-rotate(180deg)' },
            '54%': { transform: 'none',                            filter: 'none' },
            '55%': { transform: 'translateX(18px) skewX(-4deg)',   filter: 'hue-rotate(90deg) brightness(2)' },
            '56%': { transform: 'translateX(-8px)',                filter: 'brightness(3) invert(0.1)' },
            '57%': { transform: 'translateX(10px) skewX(5deg)',    filter: 'hue-rotate(270deg)' },
            '58%': { transform: 'none',                            filter: 'brightness(4)' },
            '59%': { transform: 'translateX(-12px)',               filter: 'hue-rotate(180deg)' },
            '60%': { transform: 'none',                            filter: 'none' },
            '70%': { transform: 'translateX(10px) skewX(-3deg)',   filter: 'hue-rotate(90deg) brightness(2)' },
            '71%': { transform: 'translateX(-16px)',               filter: 'brightness(3)' },
            '72%': { transform: 'none',                            filter: 'none' },
            '80%': { transform: 'translateX(8px) skewX(4deg)',     filter: 'hue-rotate(270deg) brightness(1.5)' },
            '81%': { transform: 'translateX(-6px)',                filter: 'brightness(2) invert(0.2)' },
            '82%': { transform: 'none',                            filter: 'none' },
          },
          '@keyframes glitchBarCyan': {
            '0%, 50%, 100%': { opacity: 0 },
            '51%': { opacity: 1, top: '15%',  height: '22%' },
            '52%': { opacity: 0 },
            '53%': { opacity: 1, top: '70%',  height: '12%' },
            '55%': { opacity: 1, top: '35%',  height: '28%' },
            '56%': { opacity: 0 },
            '70%': { opacity: 1, top: '25%',  height: '18%' },
            '71%': { opacity: 0 },
            '80%': { opacity: 1, top: '60%',  height: '20%' },
            '81%': { opacity: 0 },
          },
          '@keyframes glitchBarMagenta': {
            '0%, 50%, 100%': { opacity: 0 },
            '52%': { opacity: 1, top: '50%',  height: '20%' },
            '53%': { opacity: 0 },
            '54%': { opacity: 1, top: '20%',  height: '15%' },
            '57%': { opacity: 1, top: '75%',  height: '10%' },
            '58%': { opacity: 0 },
            '71%': { opacity: 1, top: '40%',  height: '25%' },
            '72%': { opacity: 0 },
            '81%': { opacity: 1, top: '10%',  height: '30%' },
            '82%': { opacity: 0 },
          },

          animation: 'glitchJitter 2s steps(1) infinite',

          // cyan glitch bar — repurposes MUI's inactive-underline ::before
          '&::before': {
            content: '""',
            position: 'absolute',
            left: -5,
            right: -5,
            top: '15%',
            height: '22%',
            backgroundColor: alpha('#00FFFF', 0.55),
            borderBottom: 'none',
            transform: 'none',
            transition: 'none',
            pointerEvents: 'none',
            zIndex: 2,
            animation: 'glitchBarCyan 2s steps(1) infinite',
          },
          // magenta glitch bar — repurposes MUI's focus-underline ::after
          '&::after': {
            content: '""',
            position: 'absolute',
            left: -5,
            right: -5,
            top: '50%',
            height: '20%',
            backgroundColor: alpha('#FF00FF', 0.5),
            borderBottom: 'none',
            transform: 'none',
            transition: 'none',
            pointerEvents: 'none',
            zIndex: 2,
            animation: 'glitchBarMagenta 2s steps(1) infinite',
          },
        },
        input: {
          color: '#39FF14',
          fontFamily: '"Courier New", Courier, monospace',
          fontWeight: 700,
          caretColor: '#39FF14',
          '&::placeholder': { color: alpha('#39FF14', 0.4) },
        },
      },
    },

    // ── CARD ─────────────────────────────────────────────────────────────────
    MuiCard: {
      styleOverrides: {
        root: {
          border: '2px solid ' + alpha(PONG_WHITE, 0.3),
          backgroundColor: alpha(PONG_WHITE, 0.03),
          borderRadius: 0,
        },
      },
    },

    // ── CHECKBOX looks like a pixel sprite ───────────────────────────────────
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: STAR_GOLD,
          '&.Mui-checked': { color: STAR_GLOW },
          '& .MuiSvgIcon-root': { fontSize: 28 },
        },
      },
    },

    // ── SWITCH looks like a Pong score board toggle ───────────────────────────
    MuiSwitch: {
      styleOverrides: {
        root: { padding: 0 },
        switchBase: {
          padding: 2,
          '&.Mui-checked': {
            color: PONG_BLACK,
            '& + .MuiSwitch-track': {
              backgroundColor: STAR_GOLD,
              opacity: 1,
            },
          },
        },
        thumb: {
          borderRadius: 0,
          width: 20,
          height: 20,
          backgroundColor: PONG_WHITE,
        },
        track: {
          borderRadius: 0,
          backgroundColor: alpha(PONG_WHITE, 0.2),
        },
      },
    },

    // ── SLIDER ───────────────────────────────────────────────────────────────
    MuiSlider: {
      styleOverrides: {
        root: { color: STAR_GOLD },
        thumb: {
          borderRadius: 0,
          width: 12,
          height: 28,
          backgroundColor: PONG_WHITE,
          '&:hover': { boxShadow: '0 0 12px ' + PONG_WHITE },
        },
        track: { height: 4, borderRadius: 0 },
        rail: { height: 4, borderRadius: 0, backgroundColor: alpha(PONG_WHITE, 0.2) },
      },
    },

    // ── CHIP ─────────────────────────────────────────────────────────────────
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '2px solid ' + PONG_WHITE,
          backgroundColor: 'transparent',
          color: PONG_WHITE,
          fontFamily: '"Courier New", Courier, monospace',
          fontWeight: 700,
          letterSpacing: '0.1em',
          clipPath:
            'polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)',
        },
      },
    },

    // ── PAGE / GLOBAL BODY ────────────────────────────────────────────────────
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: PONG_BLACK,
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 39px,
              ${alpha(PONG_WHITE, 0.04)} 39px,
              ${alpha(PONG_WHITE, 0.04)} 40px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 39px,
              ${alpha(PONG_WHITE, 0.04)} 39px,
              ${alpha(PONG_WHITE, 0.04)} 40px
            )
          `,
        },
      },
    },
  },
})
