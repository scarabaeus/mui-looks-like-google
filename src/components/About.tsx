import { Box, Divider, Link, Typography } from '@mui/material';

export function About() {
  return (
    <Box sx={{ p: 4, maxWidth: 660 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
        Why does this exist?
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.6, mb: 4 }}>
        A live receipt for the next time someone says it in a meeting.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        If I had a nickel for every time someone declared{' '}
        <strong>
          <em>
            "if we use{' '}
            <Link
              href="https://mui.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              Material UI
            </Link>
            , our app will look like Google"
          </em>
        </strong>{' '}
        in a meeting, I'd retire tomorrow.
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Every theme you see in this sidebar was built using a{' '}
        <strong>single, hot-swappable MUI theme object</strong> alone. No custom
        components. No inline/one-off <code>sx</code>, <code>style</code>, or{' '}
        <code>className</code> props scattered through the codebase. No{' '}
        <code>styled()</code> wrappers. No additional CSS modules to support
        pseudo-selectors, media/container queries, or deeply nested elements as
        an after thought. Just <code>createTheme()</code> and, frankly, an
        absurd amount of <code>styleOverrides</code> within it.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        What's in the demo
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        The form on every theme page is identical — same JSX, same{' '}
        <code>TextField</code> variants, same <code>Button</code> components.
        The only thing that changes is the theme passed to{' '}
        <code>{'<ThemeProvider>'}</code> — and, hopefully, a few uninitiated
        minds.
      </Typography>
      <Box component="ul" sx={{ pl: 3, mb: 4 }}>
        {[
          ['Standard', 'MuiInput — the classic underlined variant'],
          ['Outlined', 'MuiOutlinedInput — border via fieldset'],
          ['Filled', 'MuiFilledInput — filled background variant'],
          ['Buttons', 'contained and outlined, same component'],
          ['Checkbox', 'MuiCheckbox with a FormControlLabel'],
        ].map(([term, desc]) => (
          <Box component="li" key={term} sx={{ mb: 0.75 }}>
            <Typography variant="body2" component="span">
              <strong>{term}</strong> — {desc}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          mb: 4,
          pl: 2,
          borderLeft: '3px solid',
          borderColor: 'primary.main',
        }}
      >
        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.75 }}>
          Interesting note
        </Typography>
        <Typography variant="body1">
          The iPhone OS 1.0 theme checkbox is actually still a{' '}
          <code>MuiCheckbox</code> — not a <code>MuiSwitch</code>. MUI ships a
          perfectly good toggle component. I didn't use it. Instead, the
          checkbox was restyled{' '}
          <em>
            entirely within <code>styleOverrides</code>
          </em>{' '}
          using pseudo-elements to fake the track and thumb, and a{' '}
          <code>translateX</code> transition to slide the thumb on check. Same
          component, same behavior, zero JSX changes. I didn't <em>have</em> to
          do it, you don't <em>need</em> to do it, but I did it to prove a
          point.
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Also — yes, the showcase is exactly five components. MUI has dozens.
        Theming all of them would have taken time and energy I simply don't
        have. The point was to prove it's possible, not to build a second job
        for myself. The receipts are in. We move on.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Caveats (because I know someone will ask)
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        These aren't pixel-perfect, production-ready implementations. They're
        proof-of-concept themes designed to demonstrate range, not to be
        copy-pasted into your codebase. The Ridiculousness theme in particular
        should <em>never</em> be anywhere near production. You know who you are.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        The point isn't "here's how to build an iOS theme." The point is "MUI's
        theming system is powerful enough that you could, and it would still
        just be a theme."
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="body2" sx={{ opacity: 0.6 }}>
        Built by a tired engineer who needed receipts.{' '}
        <Link
          href="https://github.com/scarabaeus/mui-looks-like-google"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source on GitHub.
        </Link>
      </Typography>
    </Box>
  );
}
