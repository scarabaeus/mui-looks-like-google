import {
  Box,
  Divider,
  Drawer,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import type { ThemeEntry, ThemeId } from '../themes';

const DRAWER_WIDTH = 240;

interface SidebarProps {
  themes: ThemeEntry[];
  activeId: ThemeId;
  showAbout: boolean;
  onSelect: (id: ThemeId) => void;
  onAbout: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export function Sidebar({
  themes,
  activeId,
  showAbout,
  onSelect,
  onAbout,
  mobileOpen,
  onMobileClose,
}: SidebarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  function handleSelect(id: ThemeId) {
    onSelect(id);
    if (isMobile) onMobileClose();
  }

  function handleAbout() {
    onAbout();
    if (isMobile) onMobileClose();
  }

  const contents = (
    <Box
      component="nav"
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        minHeight: '100%',
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
      <Typography
        variant="body2"
        sx={{ mb: 1, opacity: 0.6, fontStyle: 'italic', lineHeight: 1.4 }}
      >
        Turns out{' '}
        <Link href="https://mui.com" target="_blank" rel="noopener">
          MUI
        </Link>{' '}
        doesn't have to look like Google.
      </Typography>
      {themes.map((entry) => (
        <Link
          key={entry.id}
          component="button"
          underline="hover"
          onClick={() => handleSelect(entry.id as ThemeId)}
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
          onClick={handleAbout}
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

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isMobile ? mobileOpen : true}
      onClose={onMobileClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        width: { md: DRAWER_WIDTH },
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          borderRight: '1px solid',
          borderColor: 'divider',
        },
      }}
    >
      {contents}
    </Drawer>
  );
}
