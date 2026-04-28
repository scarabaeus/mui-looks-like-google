import type { Theme } from '@mui/material/styles'
import { defaultTheme } from './default'
import { ridiculousnessTheme } from './ridiculousness'

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
    id: 'default',
    label: 'Default',
    theme: defaultTheme,
    description: 'The "it looks like Google" one. An empty theme object.',
  },
]

export type ThemeId = (typeof themes)[number]['id']
