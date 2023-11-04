import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = "theme";
export const DEFAULT_THEME: Theme = Theme.LIGHT;

export const ThemeContext = createContext<ThemeContextProps>({});
