function App() {
	return (
		<>
			<div id="quote-box">
				<blockquote id="text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at quam
					nunc. Vestibulum in quam ut libero fringilla bibendum eget vel justo.
					Etiam nunc turpis, luctus quis vehicula a, hendrerit sit amet augue.
				</blockquote>
				<p id="author">Lorem Ipsum</p>
				<div id="actions">
					<a id="tweet-quote" href="#">
						Tweet Quote
					</a>
					<a id="new-quote" href="#">
						New Quote
					</a>
					<div className="clear"></div>
				</div>
			</div>
			<footer>
				by <a href="https://jimfarrugia.com.au">Jim Farrugia</a>
			</footer>
		</>
	);
}

export default App;
