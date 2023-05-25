const homePageController = (req, res) => {
	const blogs = [
		{ title: "Title 1", snippet: "Lorem ipsum dolor sit amet consectetur" },
		{ title: "Title 2", snippet: "Lorem ipsum dolor sit amet consectetur" },
		{ title: "Title 3", snippet: "Lorem ipsum dolor sit amet consectetur" },
	];
	res.render("index", { title: "Home", blogs });
};

const aboutPageController = (req, res) => {
	res.render("about", { title: "About" });
};
const createPageController = (req, res) => {
	res.render("create", { title: "Create a new blog" });
};
const noPageController = (req, res) => {
	res.status(404).render("404", { title: "404" });
};

module.exports = {
	homePageController,
	aboutPageController,
	createPageController,
	noPageController,
};
