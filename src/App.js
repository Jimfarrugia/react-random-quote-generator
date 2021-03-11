import { useState } from "react";
import randomQuote from "random-quotes";
import Quote from "./components/Quote";
import Actions from "./components/Actions";
import Footer from "./components/Footer";

function App() {
	const [quote, setQuote] = useState(randomQuote());

	return (
		<>
			<div id="quote-box">
				<Quote body={quote.body} author={quote.author} />
				<Actions />
			</div>
			<Footer />
		</>
	);
}

export default App;
