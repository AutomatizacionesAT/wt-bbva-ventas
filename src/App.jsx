import '@styles/app.scss'
import { Routes, Route } from 'react-router-dom'
import imgBackground from './assets/images/index/back1.jpg'
import imgBackgroundD from './assets/images/index/back2.jpg'
import Navbar from './components/Navbar/Navbar'
import Bienvenida from './components/Bienvenida/Bienvenida'
import Corrector from './components/Corrector/Corrector'
import Objeciones from './components/objeciones/objeciones'
import GlobalContext, { GlobalProvider } from './context/GlobalContext'
import { useContext } from 'react'
import TarjetasCredito from './components/TarjetasCredito/TarjetasCredito'

const App = () => {
	const { scheme } = useContext(GlobalContext)
	const style = {
		backgroundImage: `url(${scheme === 'light' ? imgBackground : imgBackgroundD})`,
		backgroundSize: '100% 100%',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		colorScheme: scheme,
	}
	return (
		<div className="app" style={style}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Bienvenida />} />
				<Route path="/corrector" element={<Corrector />} />
				<Route path="/objeciones" element={<Objeciones />} />
				<Route path="/tarjetasCredito" element={<TarjetasCredito />} />
			</Routes>
		</div>
	)
}

export default App
