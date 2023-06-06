const handleErrors = (err) => {
	// console.log(err.message,err.code);
	let errors = { username: "", email: "", password1: "", password2: "" };

	// incorrect email
	if (err.message === "incorrect email") {
		errors.email = "That email is not registered";
	}

	// incorrect password
	if (err.message === "incorrect password") {
		errors.password1 = "That password is incorrect";
	}

	// duplicate email & username error
	if (err.code === 11000) {
		if (err.message.includes("{ email:")) {
			errors.email = "that email is already registered";
		} else if (err.message.includes("{ username:")) {
			errors.username = "that username is already registered";
		}

		return errors;
	}

	// validation errors
	if (err.message.includes("user validation failed")) {
		Object.values(err.errors).forEach((error) => {
			errors[error.properties.path] = error.properties.message;
		});
	}

	return errors;
};

module.exports = handleErrors;
