import React from "react";
import axios from "axios";
import CardComp from "./CardComp";
import FormComp from "./FormComp";

class Movies extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchItem: "",
			movies: [],
		};
	}
	
	searchHandle = (e) => {
		this.setState({ searchItem: e.target.value });
	};

	clickHandle = () => {
		axios
			.get(
				`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${this.state.searchItem}`
			)
			.then((result) => {
				const movies = result.data.results;
				this.setState({ movies: movies, searchItem: "" });
			});
	};

	handleKeyPress = (e) => {
		if (e.keyCode === 13) {
			this.clickHandle();
		}
	};

	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyPress);
	};

	render() {
		return (
			<div>
				<FormComp
					search={this.searchHandle}
					click={this.clickHandle}
					value={this.state.searchItem}
				/>
				<div className="d-flex flex-wrap">
					{this.state.movies.map((movie) => {
						return <CardComp key={movie.id} movie={movie} />;
					})}
				</div>
			</div>
		);
	}
}



export default Movies;
