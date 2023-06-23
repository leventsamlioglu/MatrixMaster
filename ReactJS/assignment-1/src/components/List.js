import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";

const List = ({items}) => {
	return (
		<ListGroup className="mb-4">
			{items.map((item, index) => (
				<div className="d-flex mb-2" key={index}>
					<InputGroup.Checkbox />
					<ListGroup.Item>{item}</ListGroup.Item>
				</div>
			))}
		</ListGroup>
	);
};

export default List;
