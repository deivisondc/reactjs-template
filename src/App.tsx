import { Hello } from './components/Hello';

import reactLogo from './assets/react.svg';

import viteLogo from '/vite.svg';

function App() {
	const text = 'React';

	return (
		<div className="App">
			<Hello />
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>

				<span>{text}</span>
			</div>
		</div>
	);
}

export default App;
