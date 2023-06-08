import './styles/index.scss';
import classNames from 'classnames';
import AppRouter from "app/providers/roter/AppRouter";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
	return (
			<div className={classNames('app')}>
				<Navbar/>

				<div className="content-flex">
					<Sidebar />
					<div className="content-page">
						<AppRouter />
					</div>
				</div>
			</div>
	);
};

export default App;