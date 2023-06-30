import { useState } from "react";
import axios from "axios";
import Input from "./Input";
import Card from "./Cards";
import Loading from "./Loading";
import useGetLocation from "./useGetLocation";

function FindPlace() {
	const [list, setList] = useState([]);
	const [search, setSearch] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	// Use custom hook to get geo location data
	const {lat,long} = useGetLocation()

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
