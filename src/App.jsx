import { useState } from "react";

import GameBoard from "./components/GameBoard.component";
import Header from "./components/Header.component";
import Player from "./components/Player.component";
import Log from "./components/Log.component";

export default function App() {
	const [activePlayer, setActivePlayer] = useState("X");
	const [gameTurns, setGameTurns] = useState([]);

	function selectSquare(row, col) {
		setActivePlayer((curVal) => (curVal == "X" ? "O" : "X"));
		// ? dont use activePlayer state value for updating gameTurns state because we wont have the latest value of activePlayer state
		// ? when we want to update an state of type object or array, we should clone it then update the clone and return the clone
		setGameTurns((curGameTurns) => [{ player: curGameTurns[0]?.player == "X" ? "O" : "X", square: { row, col } }, ...curGameTurns]);
	}

	return (
		<>
			<Header />
			<main>
				<div id="game-container">
					<ol
						id="players"
						className="highlight-player"
					>
						<Player
							initName="Player 1"
							symbol="X"
							isActive={activePlayer == "X"}
						/>
						<Player
							initName="player 2"
							symbol="O"
							isActive={activePlayer == "O"}
						/>
					</ol>
					<GameBoard
						onSelectSquare={selectSquare}
						turns={gameTurns}
					/>
				</div>
				<Log turns={gameTurns} />
			</main>
		</>
	);
}
