import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const FormComp = (props) => {
	return (
		<Form
			className="w-50 m-auto mb-4 mt-4"
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Control
					type="text"
					placeholder="Enter a movie name"
					onChange={props.search}
					value={props.value}
				/>
			</Form.Group>

			<Button variant="primary" className="w-100" onClick={props.click}>
				Search
			</Button>
		</Form>
	);
};

FormComp.propTypes = {
	value: PropTypes.oneOf(["Matrix", "Interstellar"]).isRequired,
};

export default FormComp;
