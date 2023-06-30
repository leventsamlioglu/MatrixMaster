import { useEffect, useRef } from "react";

const Input = (params) => {
	const ref = useRef();

	useEffect(() => {
		ref.current.focus();
	}, []);

	return (
		<div className="input-group mt-4 mb-5 m-auto w-50">
			<input
				ref={ref}
				type="text"
				className="form-control fs-4"
				placeholder="Find a user"
			/>
			<div className="input-group-append">
				<button
					className="btn btn-outline-secondary fs-3"
					type="button"
					onClick={() => {
						params.clickHandle(ref.current.value);
						ref.current.value = ""
					}}
				>
					Let's Find It!
				</button>
			</div>
		</div>
	);
};

export default Input;