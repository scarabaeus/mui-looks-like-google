import { Box, Divider, Link, Typography } from '@mui/material'
import type { ThemeEntry, ThemeId } from '../themes'

interface SidebarProps {
  themes: ThemeEntry[]
  activeId: ThemeId
  onSelect: (id: ThemeId) => void
}

export function Sidebar({ themes, activeId, onSelect }: SidebarProps) {
  return (
    <Box
      component="nav"
      sx={{
        width: 240,
        flexShrink: 0,
        borderRight: '1px solid',
        borderColor: 'divider',
        minHeight: '100vh',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Typography variant="subtitle2" sx={{ mb: 1, opacity: 0.5, textTransform: 'uppercase', letterSpacing: 1 }}>
        Themes
      </Typography>
      <Divider sx={{ mb: 1 }} />
      {themes.map((entry) => (
        <Link
          key={entry.id}
          component="button"
          underline="hover"
          onClick={() => onSelect(entry.id as ThemeId)}
          sx={{
            display: 'block',
            textAlign: 'left',
            py: 0.75,
            px: 1,
            borderRadius: 1,
            fontWeight: activeId === entry.id ? 700 : 400,
            color: activeId === entry.id ? 'primary.main' : 'text.primary',
            backgroundColor: activeId === entry.id ? 'action.selected' : 'transparent',
            cursor: 'pointer',
            '&:hover': { backgroundColor: 'action.hover' },
          }}
        >
          {entry.label}
        </Link>
      ))}
    </Box>
  )
}
