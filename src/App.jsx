import { useState } from "react";

import GameBoard from "./components/GameBoard.component";
import Header from "./components/Header.component";
import Player from "./components/Player.component";
import Log from "./components/Log.component";
import WINNING_CONFITIONS from "./winning-conditions";

function changeActivePlayer(gameTurns) {
	return gameTurns[0]?.player == "X" ? "O" : "X";
}

export default function App() {
	const [gameTurns, setGameTurns] = useState([]);

	let activePlayer = "X";

	function selectSquare(row, col) {
		// ? dont use activePlayer state value for updating gameTurns state because we wont have the latest value of activePlayer state
		// ? when we want to update an state of type object or array, we should clone it then update the clone and return the clone
		setGameTurns((curGameTurns) => {
			activePlayer = changeActivePlayer(curGameTurns);

			return [{ player: curGameTurns[0]?.player == "X" ? "O" : "X", square: { row, col } }, ...curGameTurns];
		});
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
