import '@styles/app.scss'
import { Routes, Route } from 'react-router-dom'
import imgBackground from './assets/images/index/backgroundLight.jpg'
import imgBackgroundD from './assets/images/index/background.jpg'
import imgApp from './assets/images/index/backApp.jpg'
import Bienvenida from './components/Bienvenida/Bienvenida'
import Corrector from './components/Corrector/Corrector'
import MiniCheck from './components/MiniCheck/MiniCheck.jsx'
import MiniCheckD from './components/MiniCheckD/MiniCheckD.jsx'
import MiniCheckT from './components/MiniCheckT/MiniCheckT.jsx'
import GlobalContext, { GlobalProvider } from './context/GlobalContext'
import { useContext, useEffect } from 'react'
import { NoteApp } from './components/NoteApp/NoteApp.jsx'
import HorNav from './components/Navbar/HorNav.jsx'
import { TarjetasCredito } from './components/TarjetasCredito/TarjetasCredito.jsx'

import { Objecion } from './components/Objeciones/Objecion.jsx'
import { CuotasManejo } from './components/CuotasManejo/CuotasManejo.jsx'

const App = () => {
	const { scheme, activeAppNote, showApp } = useContext(GlobalContext)
	const style = {
		app: {
			backgroundImage: `url(${scheme === 'light' ? imgBackground : imgBackgroundD})`,
			colorScheme: scheme,
		},
		body: {
			backgroundImage: `url(${imgApp})`,
			colorScheme: scheme,
		},
	}
	useEffect(() => {
		document.body.addEventListener('keydown', e => {
			if (e.key == 'Escape') {
				showApp(false)
			}
		})
	})
	return (
		<div className="app h" style={style.app}>
			{/* <Navbar /> */}
			<HorNav />
			{activeAppNote && <NoteApp />}
			<section className="app__body" style={style.body}>
				<Routes>
					<Route path="/" element={<Bienvenida />} />
					<Route path="/corrector" element={<Corrector />} />
					<Route path="/tarjetacredito/manualobjeciones" element={<Objecion NBD="OBJETC" />} />
					<Route path="/tarjetacredito/minicheck" element={<MiniCheck NBD="OBJETC" />} />
					<Route path="/tarjetacredito/minicheckD" element={<MiniCheckD NBD="OBJETC" />} />
					<Route path="/tarjetacredito/minicheckT" element={<MiniCheckT NBD="OBJETC" />} />
					<Route path="/amparada/manualobjeciones" element={<Objecion NBD="OBJEAM" />} />
					<Route path="/consumo/manualobjeciones" element={<Objecion NBD="OBJECON" />} />
					<Route path='/compracartera/manualobjeciones' element={<Objecion NBD='OBJECOMCAR' />} />
					<Route path="/beneficiosdetarjeta" element={<TarjetasCredito />} />
					<Route path="/cuotasmanejo" element={<CuotasManejo />} />
				</Routes>
			</section>
		</div>
	)
}

export default App
