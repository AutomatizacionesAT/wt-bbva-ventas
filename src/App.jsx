import '@styles/app.scss'
import { Routes, Route } from 'react-router-dom'

import imgBackground from './assets/images/index/backgroundLight.jpg'
import imgBackgroundD from './assets/images/index/background.jpg'
import imgApp from './assets/images/index/backApp.jpg'
import imgCtrlAccesss from './assets/images/index/sessionBackground.jpg'

import dataNavbar from './components/Navbar/dataNavbar.json'
import Bienvenida from './components/Bienvenida/Bienvenida'
import Corrector from './components/Corrector/Corrector'
import CambioDireccion from './components/MiniChecklist/CambioDireccion/CambioDireccion.jsx'
import ActivacionToken from './components/MiniChecklist/ActivacionToken/ActivacionToken.jsx'
import AceptacionPreApro from './components/MiniChecklist/AceptacionPreApro/AceptacionPreApro.jsx'
import ActivacionTD from './components/MiniChecklist/ActivacionTD/ActivacionTD.jsx'
import AceptacionCreditoConsumo from './components/MiniChecklist/AceptacionCreditoConsumo/AceptacionCreditoConsumo.jsx'
import GlobalContext, { GlobalProvider } from './context/GlobalContext'
import { useContext, useEffect } from 'react'
import { NoteApp } from './components/NoteApp/NoteApp.jsx'
import HorNav from './components/Navbar/HorNav.jsx'
import { TarjetasCredito } from './components/TarjetasCredito/TarjetasCredito.jsx'
import { TarjetasCreditoAmparada } from './components/TarjetasCredito/TarjetasCreditoAmparada.jsx'

import { Objecion } from './components/Objeciones/Objecion.jsx'
import { CuotasManejo } from './components/CuotasManejo/CuotasManejo.jsx'
import { CarteraYRediferido } from './components/Calculadoras/CarteraYRediferido/CarteraYRediferido.jsx'
import { SimuladorTDC } from './components/Calculadoras/SimuladorTDC/SimuladorTDC.jsx'
import { SimuladorConsumo } from './components/Calculadoras/SimuladorConsumo/SimuladorConsumo.jsx'
import { CarteraYRediferidodos } from './components/Calculadoras/CarteraYRediferidodos/CarteraYRediferidodos.jsx'
import Galeria from './components/Galeria/Galeria.jsx'
import Protocolo from './components/Guiones/GuionesTC/Protocolo.jsx'
import Preaprobados from './components/Guiones/GuionesTC/Preaprobados.jsx'
import Amparada from './components/Guiones/GuionesAmparada/ProtocoloAmprada.jsx'
import CompraCartera from './components/Guiones/GuionesCC/ProtocoloCC.jsx'
import AutoGestion from './components/Guiones/GuionesConsumo/ProtocoloAutogestion.jsx'
import Rediferidos from './components/Guiones/GuionesRediferido/ProtocoloRediferidos.jsx'

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
		const sessionRec = document.querySelector('.sessionRec')
		if (sessionRec) {

			if (sessionStorage.getItem('session') != 'true') {

				sessionRec.style.backgroundImage = `url(${imgCtrlAccesss})`
				sessionRec.style.backgroundSize = 'cover'
				sessionRec.style.backgroundRepeat = 'no-repeat'
				sessionRec.style.backgroundPosition = 'center'

			}

		}

	})
	return (
		<div className="app h" style={style.app}>
			{/* <Navbar /> */}
			<HorNav />
			<Galeria />
			{activeAppNote && <NoteApp />}
			<section className="app__body" style={style.body}>
				<Routes>
					{/* aca cada bienvenida tendria su nombre de segmento */}
					{dataNavbar.SEGMENTS.map((segment, i) => {
						return <Route key={i} path={'/' + segment.segment} element={<Bienvenida nombre={segment.segment} />} />
					})}
					<Route path="/" element={<Bienvenida nombre={"no"} />} />

					<Route path="/" element={<Bienvenida />} />
					<Route path="/corrector" element={<Corrector />} />
					<Route path="/tarjetacredito/manualobjeciones" element={<Objecion NBD="OBJETC" />} />
					<Route path="/consumo/manualobjeciones" element={<Objecion NBD="OBJECON" />} />
					<Route path="/amparada/manualobjeciones" element={<Objecion NBD="OBJEAM" />} />
					<Route path='/compracartera/manualobjeciones' element={<Objecion NBD='OBJECOMCAR' />} />
					<Route path='/rediferido/manualobjeciones' element={<Objecion NBD='OBJERED' />} />
					<Route path="/minichecklist/cambiodireccion" element={<CambioDireccion />} />
					<Route path="/minichecklist/activaciontoken" element={<ActivacionToken />} />
					<Route path="/minichecklist/aceptacionpreaprobado" element={<AceptacionPreApro />} />
					<Route path="/minichecklist/activaciontarjetacredito" element={<ActivacionTD />} />
					<Route path="/minichecklist/aceptacionconsumo" element={<AceptacionCreditoConsumo />} />
					<Route path="/beneficiosdetarjeta" element={<TarjetasCredito />} />
					<Route path="/beneficiosdetarjetaamparada" element={<TarjetasCreditoAmparada />} />
					<Route path="/cuotasmanejo" element={<CuotasManejo />} />
					<Route path="/carteraYrediferido" element={<CarteraYRediferido />} />
					<Route path="/carteraYrediferidodos" element={<CarteraYRediferidodos />} />
					<Route path="/SimuladorTDC" element={<SimuladorTDC />} />
					<Route path="/SimuladorConsumo" element={<SimuladorConsumo />} />
					<Route path="/tarjetacredito/protocolo" element={<Protocolo />} />
					<Route path="/tarjetacredito/preaprobados" element={<Preaprobados />} />
					<Route path="/amparada/amparada" element={<Amparada />} />
					<Route path="/compracartera/compracartera" element={<CompraCartera />} />
					<Route path="/consumo/consumo" element={<AutoGestion />} />
					<Route path="/rediferidos/rediferidos" element={<Rediferidos />} />

				</Routes>
			</section>
		</div>
	)
}

export default App
