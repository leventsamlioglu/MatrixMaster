import React from "react";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import List from "./components/List";

class TodoListClass extends React.Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
		this.state = {
			input: "",
			items: [],
		};
	}

	handleChange = (e) => {
		this.setState({ input: e.target.value });
	};

	handleClick = () => {
		this.setState({
			items: [...this.state.items, this.state.input],
			input: "",
		});
		this.ref.current.value = "";
		this.ref.current.focus();
	};

	render() {
		return (
			<Card className="w-50 m-auto">
				<Card.Body>
					<Card.Title className="text-center">TODO LIST</Card.Title>
					<List items={this.state.items}/>
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

export default TodoListClass;
