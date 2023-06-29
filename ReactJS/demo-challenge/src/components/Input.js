import { useRef } from "react";

const Input = (params) => {
	const ref = useRef();
	return (
		<div className="input-group mt-4 mb-3 m-auto w-50 ">
			<input
				ref={ref}
				type="text"
				className="form-control fs-4"
				placeholder="Find a place near your neighborhood.."
			/>
			<div className="input-group-append">
				<button
					className="btn btn-outline-secondary fs-3"
					type="button"
					onClick={() => params.clickHandle(ref.current.value)}
				>
					Let's Find It!
				</button>
			</div>
		</div>
	);
};

export default Input;
