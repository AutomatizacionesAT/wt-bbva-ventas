const TemplateCard = ({ cardName }) => {
	return (
		<div className={'card ' + cardName}>
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
						<g opacity="0.8">
							<polyline points="0,50 35,50" fill="none" stroke="#000" stroke-width="2"></polyline>
							<polyline
								points="0,20 20,20 35,35"
								fill="none"
								stroke="#000"
								stroke-width="2"></polyline>
							<polyline points="50,0 50,35" fill="none" stroke="#000" stroke-width="2"></polyline>
							<polyline
								points="65,35 80,20 100,20"
								fill="none"
								stroke="#000"
								stroke-width="2"></polyline>
							<polyline points="100,50 65,50" fill="none" stroke="#000" stroke-width="2"></polyline>
							<polyline
								points="35,35 65,35 65,65 35,65 35,35"
								fill="none"
								stroke="#000"
								stroke-width="2"></polyline>
							<polyline
								points="0,80 20,80 35,65"
								fill="none"
								stroke="#000"
								stroke-width="2"></polyline>
							<polyline points="50,100 50,65" fill="none" stroke="#000" stroke-width="2"></polyline>
							<polyline
								points="65,65 80,80 100,80"
								fill="none"
								stroke="#000"
								stroke-width="2"></polyline>
						</g>
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
					<time datetime="2038-01">01/38</time>
				</div>
				<div className="card__name" aria-label="Dee Stroyer">
					Jk Huger
				</div>
				{cardName != 'Visa' ? (
					<div className="card__vendor" role="img" aria-labelledby="card-vendor">
						<span id="card-vendor" className="card__vendor-sr">
							{cardName}
						</span>
					</div>
				) : (
					<div className="card__pro">
						<svg viewBox="0 0 256 83" height="32" width="80" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<linearGradient y2="100%" y1="-2.006%" x2="54.877%" x1="45.974%" id="logosVisa0">
									<stop stop-color="#222357" offset="0%"></stop>
									<stop stop-color="#254AA5" offset="100%"></stop>
								</linearGradient>
							</defs>
							<path
								transform="matrix(1 0 0 -1 0 82.668)"
								d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963h-17.665m3.037-21.601l6.265-30.027h-17.158l10.893 30.027m-118.599 21.6L88.964 1.246h20.687l17.104 79.963h-20.679m-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963H75.473"
								fill="url(#logosVisa0)"></path>
						</svg>
					</div>
				)}
				<div className="card__texture"></div>
			</div>
		</div>
	)
}

export default TemplateCard
