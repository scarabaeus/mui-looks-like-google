import { useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Box, Typography } from '@mui/material'
import { themes } from './themes'
import type { ThemeId } from './themes'
import { Sidebar } from './components/Sidebar'
import { Showcase } from './components/Showcase'

export default function App() {
  const [activeId, setActiveId] = useState<ThemeId>('ridiculousness')

  const activeEntry = themes.find((t) => t.id === activeId) ?? themes[0]!

  return (
    <ThemeProvider theme={activeEntry.theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar themes={themes} activeId={activeId} onSelect={setActiveId} />
        <Box component="main" sx={{ flex: 1, overflow: 'auto' }}>
          <Box sx={{ p: 4, borderBottom: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              {activeEntry.label}
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.6 }}>
              {activeEntry.description}
            </Typography>
          </Box>
          <Showcase />
        </Box>
      </Box>
    </ThemeProvider>
  )
}
