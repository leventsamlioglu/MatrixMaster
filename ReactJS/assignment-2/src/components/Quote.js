import { useEffect, useState } from "react";
import axios from "axios";

function Quote() {
	const randomNumber = () => Math.floor(Math.random() * 1642 + 1);
	const [number, setNumber] = useState(randomNumber);
	const [quote, setQuote] = useState("");

	useEffect(() => {
		axios
			.get("https://type.fit/api/quotes")
			.then((res) => {
				return res.data;
			})
			.then((data) => setQuote(data[number]));
	}, [number]);

	return (
		<div className="bg-secondary bg-gradient">
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ height: "100vh" }}
			>
				<div className="card w-75 m-auto shadow-lg p-3 bg-body rounded">
					<h1 className="card-header">Quote Generator</h1>
					<div className="card-body">
						<blockquote className="blockquote mt-2 mb-2">
							<h5 className="card-title mb-2">{quote.text}</h5>
							<footer className="blockquote-footer mt-2">
								<cite title="Source Title">{quote.author}</cite>
							</footer>
						</blockquote>
						<button
							className="btn btn-primary mt-4"
							onClick={() => {
								setNumber(randomNumber);
							}}
						>
							Change quote!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Quote;
