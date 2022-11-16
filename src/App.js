import "./App.css";
import InputEmoji from "./components/InputEmoji/InputEmoji";

function App() {
	return (
		<>
			<div className="header">
				<InputEmoji />
			</div>
			<div className="emoji"></div>
		</>
	);
}

export default App;
