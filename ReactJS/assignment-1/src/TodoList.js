import { useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const TodoList = () => {
	// Create a new reference which will be applied to the input element
	const ref = useRef(null);

	const [input, setInput] = useState("");
	const [items, setItems] = useState([]);

	// When the input value changes update the `input` state
	function handleChange(e) {
		setInput(e.target.value);
	}

	// When the button is clicked add the `input` state to the `items` state,
	// reset the `input` state, and focus on the input element

	function handleClick() {
		setItems([...items, input]);
		setInput("");
		ref.current.value = "";
		ref.current.focus();
	}
	return (
		<Card className="w-50 m-auto">
			<Card.Body>
				<Card.Title className="text-center">TODO LIST</Card.Title>

				<ListGroup className="mb-4">
					{items.map((item, index) => (
						<div className="d-flex mb-2" key={index}>
							<InputGroup.Checkbox />
							<ListGroup.Item >{item}</ListGroup.Item>
						</div>
					))}
				</ListGroup>

				<InputGroup className="mb-3">
					<Button
						variant="outline-secondary"
						onClick={handleClick}
						value={input}
					>
						Add Todo
					</Button>
					<Form.Control ref={ref} onChange={handleChange} />
				</InputGroup>
			</Card.Body>
		</Card>
	);
};

export default TodoList;
