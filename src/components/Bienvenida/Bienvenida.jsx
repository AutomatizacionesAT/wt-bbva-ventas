import { useContext } from 'react'
import imgBack from '../../assets/images/index/backWelcome.jpg'
import imgBackD from '../../assets/images/index/backWelcome-dark.jpg'
import GlobalContext from '../../context/GlobalContext'

export default function Bienvenida() {
	const { scheme } = useContext(GlobalContext)
	const style = {
		backgroundImage: `url(${scheme === 'light' ? imgBack : imgBackD})`,
		colorScheme: scheme,
	}
	return (
		<div className="welcome" style={style}>
			<section className="welcome__content">
				<span>Bienvenido a </span>
				<span>
					Web Training <strong>BBVA</strong>
				</span>
				<p>
					VENTAS.
				</p>
			</section>
		</div>
	)
}
