import './tarjetasCredito.scss'
import imgNino from '../../assets/images/creditCards/nino.png'
import imgAsis from '../../assets/images/creditCards/assicard.png'
import { Link } from 'react-router-dom'
import TemplateCard from './Cards/TemplateCard'

const TarjetasCredito = () => {
	return (
		<section className="tarjetasCredito">
			<article className="tarjetasCredito__box">
				<div className="tarjetasCredito__header">
					<a href="#" target="_blank" className="tarjetasCredito__header--link">
						<figure className="tarjetasCredito__header--img">
							<img src={imgNino} alt="imagen niño" />
						</figure>
					</a>
					<h1 className="tarjetasCredito__header--title">Tarjeta de Crédito - Amparada</h1>
					<Link to="/">
						<figure className="tarjetasCredito__header--img">
							<img src={imgAsis} alt="imagen niño" />
						</figure>
					</Link>
				</div>

				<div className="tarjetasCredito__body">
					<div className="tarjetasCredito__subbody">
						<TemplateCard cardName="Standar" />
						<TemplateCard cardName="Gold" />
						<TemplateCard cardName="Platinum" />
						<TemplateCard cardName="Black" />
						<TemplateCard cardName="Infinite" />
					</div>
				</div>
				<div className="tarjetasCredito__footer">
					<TemplateCard cardName="Visa" />
					<TemplateCard cardName="Mastercard" />
				</div>
			</article>
		</section>
	)
}

export default TarjetasCredito
