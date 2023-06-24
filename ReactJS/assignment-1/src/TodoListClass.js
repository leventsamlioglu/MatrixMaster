import React from "react";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

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
		this.setState(state=>({
			items: [...state.items, state.input],
			input: "",
		}));
		this.ref.current.value = "";
		this.ref.current.focus();
	};

	handleCheckBox = (index) => {
		const filteredItems = this.state.items.filter((_, i) => i !== index);
		setTimeout(() => {
			this.setState({
				items: filteredItems,
			});
		}, 300);
	};

	render() {
		return (
			<Card className="w-50 m-auto">
				<Card.Body>
					<Card.Title className="text-center">TODO LIST</Card.Title>

					<ListGroup className="mb-4">
						{this.state.items.map((item, index) => (
							<div className="d-flex mb-2" key={index}>
								<InputGroup.Checkbox
									onChange={() => this.handleCheckBox(index)}
								/>
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

export default TodoListClass;
