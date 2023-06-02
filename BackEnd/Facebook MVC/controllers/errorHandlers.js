const handleErrors = (err) => {
	let errors = {  name: '', message: '' };
	

	// validation errors
	if (err.message.includes('feed validation failed')) {
	  Object.values(err.errors).forEach((error) => {
		errors[error.properties.path] = error.properties.message;
	  });
	}
  
	return {errors};
  }

  module.exports = handleErrors