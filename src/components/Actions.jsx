import { FaTwitter } from "react-icons/fa";

const Actions = ({ onClickNewQuote, quote }) => {
	return (
		<div id="actions">
			<a
				id="tweet-quote"
				href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote.body}" - ${quote.author}`}
			>
				<FaTwitter />
			</a>
			<button id="new-quote" type="button" onClick={onClickNewQuote}>
				New Quote
			</button>
			<div className="clear"></div>
		</div>
	);
};

export default Actions;
