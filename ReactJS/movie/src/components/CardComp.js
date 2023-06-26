import Card from "react-bootstrap/Card";

const CardComp = ({ movie }) => {
	return (
		<Card className="border border-primary w-25 mh-50">
			<Card.Img
				variant="top"
				src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}
			/>
			<Card.Body>
				<Card.Title className="text-center font-weight-bold fs-3">
					{movie.title}
				</Card.Title>
				<Card.Text>{movie.overview}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<small className="text-muted">Movie rating : {movie.vote_average}</small>
			</Card.Footer>
		</Card>
	);
};

export default CardComp;
