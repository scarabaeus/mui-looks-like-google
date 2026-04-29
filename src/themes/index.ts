import type { Theme } from '@mui/material/styles';
import { defaultTheme } from './default';
import { ridiculousnessTheme } from './ridiculousness';
import { ios1Theme } from './ios1';
import { unstyledTheme } from './unstyled';
import { appleHigTheme } from './appleHig';
import { win95Theme } from './win95';
import { shadcnTheme } from './shadcn';

export interface ThemeEntry {
  id: string;
  label: string;
  theme: Theme;
  description: string;
}

export const themes: ThemeEntry[] = [
  {
    id: 'ridiculousness',
    label: 'Ridiculousness',
    theme: ridiculousnessTheme,
    description:
      'Pong buttons. Star inputs. Spiral outlines. Still just a theme that looks EXACTLY like Google!',
  },
  {
    id: 'ios1',
    label: 'iPhone OS 1.0',
    theme: ios1Theme,
    description:
      'Wet-glass buttons, inset inputs, Helvetica Neue. Slide to unlock not included. (I guess they had MUI in 2007.)',
  },
  {
    id: 'unstyled',
    label: 'Unstyled HTML',
    theme: unstyledTheme,
    description:
      'Native browser elements. Labels left-anchored. Zero opinion. Oh wait... this is MUI also.',
  },
  {
    id: 'appleHig',
    label: 'Apple HIG 2025',
    theme: appleHigTheme,
    description:
      'SF Pro, system blue, focus rings. No keynote slide needed — it just feels like macOS... or Google, I guess. :facepalm:',
  },
  {
    id: 'win95',
    label: 'Windows 95',
    theme: win95Theme,
    description:
      'Silver. Sunken inputs. Raised buttons. All via theme. Please set your wallpaper to teal and prepare to feast your eyes on Google 95.',
  },
  {
    id: 'shadcn',
    label: 'shadcn/ui',
    theme: shadcnTheme,
    description:
      'Zinc. Inter. Dark ring. The "no more MUI" rewrite, built entirely in MUI. Still looks like Google.',
  },
  {
    id: 'default',
    label: 'Default',
    theme: defaultTheme,
    description:
      'The "it looks like Google" one — the out-of-the-box, unstyled MUI theme. In this one case, I agree that MUI looks like Google.',
  },
];

export type ThemeId = (typeof themes)[number]['id'];
