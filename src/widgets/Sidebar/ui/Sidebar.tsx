import classNames from "classnames";
import cls from './Sidebar.module.scss';
import React, {useState} from "react";
import {Button} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";


interface SidebarProps {
	className?: string
}

export const Sidebar = (props: SidebarProps) => {
	const { className } = props;
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed((prev) => !prev);
	}

	return (
			<div className={classNames(cls.sidebar, className, {
				[cls.collapsed]: collapsed
			} )}>
			    <Button onClick={toggleCollapsed}>click</Button>
					<ThemeSwitcher className={cls.themeSwitcher} />
			</div>
	);
};