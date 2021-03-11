const Quote = ({ body, author }) => {
	return (
		<>
			<blockquote id="text">{body}</blockquote>
			<p id="author">{author}</p>
		</>
	);
};

export default Quote;
