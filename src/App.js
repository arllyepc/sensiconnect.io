import './styles/global.css';
import Home from './pages/Home';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	useEffect(() => {
		AOS.init({
			easing: 'ease-out-quart',
			duration: 1000,
			once: true,
		});
	}, []);

	return (
		<>
			<Home />
		</>
	);
}

export default App;
