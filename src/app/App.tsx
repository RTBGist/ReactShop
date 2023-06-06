import './styles/index.scss';
import classNames from 'classnames';
import AppRouter from "app/providers/roter/AppRouter";
import {Navbar} from "widgets/Navbar";

const App = () => {
	return (
			<div className={classNames('app')}>
				<Navbar/>
				<AppRouter />
			</div>
	);
};

export default App;