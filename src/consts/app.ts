import { Space_Grotesk as SpaceGrotesk } from 'next/font/google';
import { Color } from '../styles/Color';

export const MAIN_FONT = SpaceGrotesk({
  subsets: ['latin'],
  variable: '--font-main',
  preload: true,
  fallback: ['sans-serif'],
});
export const APP_NAME = 'Zeeve-hyperlane Bridge';
export const APP_DESCRIPTION = 'A DApp for Hyperlane Warp Route transfers';
export const APP_URL = '#';
export const BRAND_COLOR = Color.primary['500'];
export const BACKGROUND_COLOR = Color.gray['500'];
// export const BACKGROUND_IMAGE = 'url(/backgrounds/main.svg)';
export const BACKGROUND_IMAGE = '';
