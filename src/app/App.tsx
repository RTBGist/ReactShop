import './styles/index.scss';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import {useTheme} from "app/providers/ThemeProvider";
import AppRouter from "app/providers/roter/AppRouter";




const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
			<div className={classNames('app')}>
				<Link to='/'>Main</Link>
				<Link to='/about'>About</Link>

				<AppRouter />
				<button onClick={toggleTheme}>Toggle theme</button>
			</div>
	);
};

export default App;