import Header from "./components/Header.component";
import Player from "./components/Player.component";

function App() {
	return (
		<>
			<Header />
			<main>
				<div id="game-container">
					<ol id="players">
						<Player
							initName="Player 1"
							symbol="X"
						/>
						<Player
							initName="player 2"
							symbol="O"
						/>
					</ol>
				</div>
			</main>
		</>
	);
}

export default App;
