import { useState } from "react";
import randomQuote from "random-quotes";
import Quote from "./components/Quote";
import Actions from "./components/Actions";
import Footer from "./components/Footer";

function App() {
	const [quote, setQuote] = useState(randomQuote());

	const onClickNewQuote = () => setQuote(randomQuote());

	return (
		<>
			<div id="quote-box">
				<Quote body={quote.body} author={quote.author} />
				<Actions onClickNewQuote={onClickNewQuote} />
			</div>
			<Footer />
		</>
	);
}

export default App;
