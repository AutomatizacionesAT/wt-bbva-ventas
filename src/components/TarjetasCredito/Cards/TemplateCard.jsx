
const TemplateCard = ({ cardName, onClick }) => {
	return (
		<div className={`card ${cardName}`} onClick={onClick}>
			<div className="card__info">
				<div className="card__logo">{cardName}</div>
				<div className="card__chip">
					<svg
						className="card__chip-lines"
						role="img"
						width="20px"
						height="20px"
						viewBox="0 0 100 100"
						aria-label="Chip">
						{/* Código SVG del chip */}
					</svg>
					<div className="card__chip-texture"></div>
				</div>
				<div className="card__type">credit</div>
				<div className="card__number">
					<span className="card__digit-group">0123</span>
					<span className="card__digit-group">4567</span>
					<span className="card__digit-group">8901</span>
					<span className="card__digit-group">2345</span>
				</div>
				<div className="card__valid-thru" aria-label="Valid thru">
					Valid
					<br />
					thru
				</div>
				<div className="card__exp-date">
					<time dateTime="2038-01">01/38</time>
				</div>
				<div className="card__name" aria-label="Cardholder Name">
					Jk Huger
				</div>
				{cardName !== 'Visa' ? (
					<div className="card__vendor" role="img" aria-labelledby="card-vendor">
						<span id="card-vendor" className="card__vendor-sr">
							{cardName}
						</span>
					</div>
				) : (
					<div className="card__pro">
						<svg viewBox="0 0 256 83" height="32" width="80" xmlns="http://www.w3.org/2000/svg">
							{/* SVG para Visa */}
						</svg>
					</div>
				)}
				<div className="card__texture"></div>
			</div>
		</div>
	);
}

export default TemplateCard;
