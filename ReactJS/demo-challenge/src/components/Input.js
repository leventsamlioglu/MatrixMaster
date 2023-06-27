const Input = (params) => {
	return (
		<div className="input-group mt-4 mb-3 m-auto w-50 ">
			<input
				type="text"
				className="form-control fs-4"
				placeholder="Find a place near your neighborhood.."
				value={params.search}
				onChange={(e) => {
					params.setSearch(e.target.value);
				}}
			/>
			<div className="input-group-append">
				<button
					className="btn btn-outline-secondary fs-3"
					type="button"
					onClick={params.clickHandle}
				>
					Let's Find It!
				</button>
			</div>
		</div>
	);
};

export default Input;
