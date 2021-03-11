const Actions = ({ onClickNewQuote }) => {
	return (
		<div id="actions">
			<a id="tweet-quote" href="#">
				Tweet Quote
			</a>
			<button id="new-quote" type="button" onClick={onClickNewQuote}>
				New Quote
			</button>
			<div className="clear"></div>
		</div>
	);
};

export default Actions;
