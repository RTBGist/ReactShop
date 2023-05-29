import classNames from "classnames";
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";


export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string,
	theme?: AppLinkTheme
}

export const AppLink = (props: AppLinkProps) => {
	const {
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		to,
		...otherProps
	} = props;

	return (
			<Link
					to={to}
					className={classNames(cls.applink, className, {
						[cls[theme]]: true
					})}
					{...otherProps}
			>
				{children}
			</Link>
	);
};