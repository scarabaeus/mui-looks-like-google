import { Box, Divider, Link, Typography } from '@mui/material';
import type { ThemeEntry, ThemeId } from '../themes';

interface SidebarProps {
  themes: ThemeEntry[];
  activeId: ThemeId;
  showAbout: boolean;
  onSelect: (id: ThemeId) => void;
  onAbout: () => void;
}

export function Sidebar({
  themes,
  activeId,
  showAbout,
  onSelect,
  onAbout,
}: SidebarProps) {
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
      <Typography
        variant="subtitle2"
        sx={{
          mb: 1,
          opacity: 0.5,
          textTransform: 'uppercase',
          letterSpacing: 1,
        }}
      >
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
            fontWeight: !showAbout && activeId === entry.id ? 700 : 400,
            color:
              !showAbout && activeId === entry.id
                ? 'primary.main'
                : 'text.primary',
            backgroundColor:
              !showAbout && activeId === entry.id
                ? 'action.selected'
                : 'transparent',
            cursor: 'pointer',
            '&:hover': { backgroundColor: 'action.hover' },
          }}
        >
          {entry.label}
        </Link>
      ))}

      <Box sx={{ mt: 'auto' }}>
        <Divider sx={{ my: 2 }} />
        <Link
          component="button"
          underline="hover"
          onClick={onAbout}
          sx={{
            display: 'block',
            textAlign: 'left',
            py: 0.75,
            px: 1,
            borderRadius: 1,
            fontWeight: showAbout ? 700 : 400,
            color: showAbout ? 'primary.main' : 'text.primary',
            backgroundColor: showAbout ? 'action.selected' : 'transparent',
            cursor: 'pointer',
            '&:hover': { backgroundColor: 'action.hover' },
          }}
        >
          About
        </Link>
      </Box>
    </Box>
  );
}
