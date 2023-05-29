import './styles/index.scss';
import classNames from 'classnames';
import {useTheme} from "app/providers/ThemeProvider";
import AppRouter from "app/providers/roter/AppRouter";
import {Navbar} from "widgets/Navbar";




const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
			<div className={classNames('app')}>
				<Navbar/>

				<AppRouter />
				<button onClick={toggleTheme}>Toggle theme</button>
			</div>
	);
};

export default App;