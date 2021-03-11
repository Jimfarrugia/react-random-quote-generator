import Quote from "./components/Quote";
import Actions from "./components/Actions";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div id="quote-box">
				<Quote />
				<Actions />
			</div>
			<Footer />
		</>
	);
}

export default App;
