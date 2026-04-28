import type { Theme } from '@mui/material/styles'
import { defaultTheme } from './default'
import { ridiculousnessTheme } from './ridiculousness'
import { ios1Theme } from './ios1'

export interface ThemeEntry {
  id: string
  label: string
  theme: Theme
  description: string
}

export const themes: ThemeEntry[] = [
  {
    id: 'ridiculousness',
    label: 'Ridiculousness',
    theme: ridiculousnessTheme,
    description: 'Pong buttons. Star inputs. Spiral outlines. Still just a theme.',
  },
  {
    id: 'ios1',
    label: 'iPhone OS 1.0',
    theme: ios1Theme,
    description: 'Wet-glass buttons, inset inputs, Helvetica Neue. Slide to unlock not included.',
  },
  {
    id: 'default',
    label: 'Default',
    theme: defaultTheme,
    description: 'The "it looks like Google" one. An empty theme object.',
  },
]

export type ThemeId = (typeof themes)[number]['id']
