import axios from "axios";
import { useState} from "react";

function FindPlace() {
	const [lat, setLat] = useState(0);
	const [long, setLong] = useState(0);
	const [list, setList] = useState([]);
    const [search, setSearch] = useState('')
	const src =
		"https://img.volkskrant.nl/11c2ddc0476adad70d858660909f34b4c992c484/restaurant-basiliek-heeft-een-onmiskenbare-wow-factor-niet-door-opzichtigheid-maar-door-vakmanschap";

	navigator.geolocation.getCurrentPosition((position) => {
		let lat = position.coords.latitude.toFixed(2);
		let long = position.coords.longitude.toFixed(2);
		setLat(lat);
		setLong(long);
	});

	const searchParams = new URLSearchParams({
		query: search,
		ll: `${lat},${long}`,
		open_now: "false",
		sort: "DISTANCE",
	});

    const clickHandle =()=>{
        axios
			.get(`https://api.foursquare.com/v3/places/search?${searchParams}`, {
				method: "GET",
				headers: {
					Accept: "application/json",
					Authorization: process.env.REACT_APP_FOURSQUARE_API_KEY,
				},
			})
			.then((result) => {
				return result.data.results;
			})
			.then((data) => {
				setList(data);
			});
    }
    console.log(list);

	return (
		<>
			<div className="input-group mt-4 mb-3 m-auto w-50 ">
				<input
					type="text"
					className="form-control fs-3"
					placeholder="Find a place near your neighborhood.."
                    value={search}
                    onChange={(e)=>{
                        setSearch(e.target.value)
                    }}
				/>
				<div className="input-group-append">
					<button className="btn btn-outline-secondary fs-3" type="button" onClick={clickHandle}>
						Let's Find It!
					</button>
				</div>
			</div>
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
										Distance {item.distance} m
									</small>
								</p>
							</div>
						</div>
					))}
			</div>
		</>
	);
}

export default FindPlace;
