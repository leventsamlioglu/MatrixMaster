import React from "react";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
		this.handleChange = (e) => {
			this.state.input(e.target.value);
		};
		this.handleClick = () => {
			this.state.items([...this.state.items, this.state.input]);
			this.state.input("");
			this.ref.current.value = "";
			this.ref.current.focus();
		};
	}
	state = {
		input: "",
		items: [],
	};

	render() {
		return (
			<Card className="w-50 m-auto">
				<Card.Body>
					<Card.Title className="text-center">TODO LIST</Card.Title>

					<ListGroup className="mb-4">
						{this.state.items.map((item, index) => (
							<div className="d-flex mb-2" key={index}>
								<InputGroup.Checkbox />
								<ListGroup.Item>{item}</ListGroup.Item>
							</div>
						))}
					</ListGroup>

					<InputGroup className="mb-3">
						<Button
							variant="outline-secondary"
							onClick={this.handleClick}
							value={this.state.input}
						>
							Add Todo
						</Button>
						<Form.Control ref={this.ref} onChange={this.handleChange} />
					</InputGroup>
				</Card.Body>
			</Card>
		);
	}
}

export default TodoList;