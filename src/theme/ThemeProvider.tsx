import {FC, ReactNode, useMemo, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps} from "./ThemeContext";

interface ThemeProviderProps {
	initialTheme?: Theme,
	children: ReactNode
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
	const {
		initialTheme = Theme.LIGHT,
		children
	} = props;

	const [theme, setTheme] = useState<Theme>(defaultTheme || initialTheme);

	const defaultProps: ThemeContextProps = useMemo(() => ({
		theme,
		setTheme,
	}), [theme]);

	return (
			<ThemeContext.Provider value={defaultProps}>
				{children}
			</ThemeContext.Provider>
	);
};

export default ThemeProvider;