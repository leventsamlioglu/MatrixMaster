const handleErrors = (err) => {

	let errors = { title: '', article: '' };

	// validation errors
	if (err.message.includes('article validation failed')) {
	  Object.values(err.errors).forEach((error) => {
		errors[error.properties.path] = error.properties.message;
	  });
	}
  
	return errors;
  }

  module.exports = handleErrors