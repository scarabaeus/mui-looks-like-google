import { useState } from 'react';
import { ThemeProvider, CssBaseline, IconButton } from '@mui/material';
import { Box, Link, Typography } from '@mui/material';
import { themes } from './themes';
import type { ThemeId } from './themes';
import { Sidebar } from './components/Sidebar';
import { Showcase } from './components/Showcase';
import { About } from './components/About';

export default function App() {
  const [activeId, setActiveId] = useState<ThemeId>('ridiculousness');
  const [showAbout, setShowAbout] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeEntry = themes.find((t) => t.id === activeId) ?? themes[0]!;

  function track(name: string, params?: Record<string, unknown>) {
    if (typeof gtag !== 'undefined') gtag('event', name, params);
  }

  function handleSelectTheme(id: ThemeId) {
    setActiveId(id);
    setShowAbout(false);
    const entry = themes.find((t) => t.id === id);
    track('theme_view', { theme_id: id, theme_name: entry?.label });
  }

  return (
    <ThemeProvider theme={activeEntry.theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <IconButton
          onClick={() => setMobileOpen(true)}
          aria-label="open navigation"
          sx={{
            display: { xs: mobileOpen ? 'none' : 'flex', md: 'none' },
            position: 'fixed',
            top: 8,
            left: 8,
            zIndex: (t) => t.zIndex.drawer + 1,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </IconButton>
        <Sidebar
          themes={themes}
          activeId={activeId}
          showAbout={showAbout}
          onSelect={handleSelectTheme}
          onAbout={() => {
            setShowAbout(true);
            track('about_view');
          }}
          mobileOpen={mobileOpen}
          onMobileClose={() => setMobileOpen(false)}
        />
        <Box
          component="main"
          sx={{
            flex: 1,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            pt: { xs: '1rem', md: 0 },
          }}
        >
          {showAbout ? (
            <About />
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <Box
                sx={{
                  p: 4,
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {activeEntry.label}
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.6 }}>
                  {activeEntry.description}
                </Typography>
              </Box>
              <Showcase />
              <Box
                sx={{
                  mt: 'auto',
                  px: 4,
                  py: 2,
                  borderTop: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="body2" sx={{ opacity: 0.55 }}>
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
            </Box>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
