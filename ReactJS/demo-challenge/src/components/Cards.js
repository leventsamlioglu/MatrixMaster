const Card = ({ list }) => {
	// Image source
	const src =
		"https://img.volkskrant.nl/11c2ddc0476adad70d858660909f34b4c992c484/restaurant-basiliek-heeft-een-onmiskenbare-wow-factor-niet-door-opzichtigheid-maar-door-vakmanschap";

	return (
		<div className="card-group w-75 m-auto">
			{list &&
				list.map((item) => (
					<div key={item.fsq_id} className="card shadow-lg p-1 bg-body rounded">
						<img className="card-img-top" src={src} alt="Restaurant" />
						<div className="card-body d-flex flex-column justify-content-between">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">{item.location.formatted_address}</p>
							<p className="card-text">
								<small className="text-muted">
									Distance {(item.distance / 1000).toFixed(2)} km
								</small>
							</p>
						</div>
					</div>
				))}
		</div>
	);
};

export default Card;
