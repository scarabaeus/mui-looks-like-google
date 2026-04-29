import type { Theme } from '@mui/material/styles'
import { defaultTheme } from './default'
import { ridiculousnessTheme } from './ridiculousness'
import { ios1Theme } from './ios1'
import { unstyledTheme } from './unstyled'
import { appleHigTheme } from './appleHig'

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
    description: 'Pong buttons. Star inputs. Spiral outlines. Still just a theme. Oh so Google-y!',
  },
  {
    id: 'ios1',
    label: 'iPhone OS 1.0',
    theme: ios1Theme,
    description: 'Wet-glass buttons, inset inputs, Helvetica Neue. Slide to unlock not included. Wait! Did they not have MUI in 2007?!',
  },
  {
    id: 'unstyled',
    label: 'Unstyled HTML',
    theme: unstyledTheme,
    description: 'Native browser elements. Labels left-anchored. Zero opinion. Oh wait... this is MUI also.',
  },
  {
    id: 'appleHig',
    label: 'Apple HIG 2025',
    theme: appleHigTheme,
    description: 'SF Pro, system blue, focus rings. No keynote slide needed — it just feels like macOS... or Google, I guess. :facepalm:',
  },
  {
    id: 'default',
    label: 'Default',
    theme: defaultTheme,
    description: 'The "it looks like Google" one. An empty theme object.',
  },
]

export type ThemeId = (typeof themes)[number]['id']
