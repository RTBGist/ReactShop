import classNames from "classnames";
import cls from './themeSwitcher.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";


interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
	const { className } = props;
	const {theme, toggleTheme} = useTheme();

	return (
			<Button
					theme={ThemeButton.CLEAR}
					onClick={toggleTheme}
					className={classNames(cls.themeSwitcher, className)}
			>
				{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
			</Button>
	);
};