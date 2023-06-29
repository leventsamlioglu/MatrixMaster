import { useState } from "react";
import axios from "axios";
import Input from "./Input";
import Card from "./Cards";
import Loading from "./Loading";

function FindPlace() {
	const [lat, setLat] = useState(0);
	const [long, setLong] = useState(0);
	const [list, setList] = useState([]);
	const [search, setSearch] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	// Get position
	navigator.geolocation.getCurrentPosition((position) => {
		let lat = position.coords.latitude.toFixed(2);
		let long = position.coords.longitude.toFixed(2);
		setLat(lat);
		setLong(long);
	});
	// Assign search parameters
	const searchParams = new URLSearchParams({
		query: search,
		ll: `${lat},${long}`,
		open_now: "false",
		sort: "DISTANCE",
	});

	// Fetch data
	const clickHandle = (value) => {
		setIsLoading(true);
		setSearch(value);
		axios
			.get(`https://api.foursquare.com/v3/places/search?${searchParams}`, {
				method: "GET",
				headers: {
					Accept: "application/json",
					Authorization: process.env.REACT_APP_FOURSQUARE_API_KEY,
				},
			})
			.then((result) => {
				setSearch("");
				return result.data.results;
			})
			.then((data) => {
				setList(data);
				setIsLoading(false);
			});
	};

	return (
		<>
			<Input clickHandle={clickHandle} />
			{isLoading ? <Loading /> : <Card list={list} />}
		</>
	);
}

export default FindPlace;
