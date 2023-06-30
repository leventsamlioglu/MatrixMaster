import { useState } from "react";

const useGetLocation = () => {
    const [lat, setLat] = useState(0);
	const [long, setLong] = useState(0);
    
    // Get position
	navigator.geolocation.getCurrentPosition((position) => {
		let lat = position.coords.latitude.toFixed(2);
		let long = position.coords.longitude.toFixed(2);
		setLat(lat);
		setLong(long);
	});
    return {lat,long};
}
 
export default useGetLocation;