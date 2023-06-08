import React from 'react';
import classNames from "classnames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";


interface NavbarProps {
	className?: string
}

export const Navbar = (props: NavbarProps) => {
	const {className} = props;

	return (
			<nav className={classNames(cls.navbar, className)}>
				<div className={classNames(cls.links)}>
					<AppLink theme={AppLinkTheme.SECONDARY} to='/'>Main</AppLink>
					<AppLink theme={AppLinkTheme.SECONDARY} to='/about'>About</AppLink>
				</div>
			</nav>
	);
};