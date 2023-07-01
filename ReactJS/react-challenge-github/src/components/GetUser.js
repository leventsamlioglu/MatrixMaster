import { useState } from "react";
import axios from "axios";
import Input from "./Input";
import Card from "./Card";
import Repos from "./Repos";
import Loading from "./Loading";

const GetUser = () => {
	const clientId = process.env.REACT_APP_GITHUB_CLIENTID;
	const clientSecrets = process.env.REACT_APP_GITHUB_CLIENTSECRET;

	const [user, setUser] = useState();
	const [repos, setRepos] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const clickHandle = (searchedUser) => {
		setIsLoading(true);

		setTimeout(() => {
			axios
				.get(
					`http://api.github.com/users/${searchedUser}?client_id=${clientId}&client_secret=${clientSecrets}&sort=created`
				)
				.then((result) => {
					setUser(result.data);
				});

			axios
				.get(
					`http://api.github.com/users/${searchedUser}/repos?client_id=${clientId}&client_secret=${clientSecrets}&sort=created`
				)
				.then((result) => {
					setRepos(result.data);
					setIsLoading(false);
				});
		}, 1000);
	};

	return (
		<div className="container p-4">
			<Input clickHandle={clickHandle} />
			{isLoading && <Loading />}
			{user && <Card user={user} />}
			{repos && <Repos repos={repos} />}
		</div>
	);
};

export default GetUser;
