import { useState } from "react";

import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";

export default function App() {
	const players = [
		{ name: "player 1", symbol: "X" },
		{ name: "player 2", symbol: "O" },
	];

	const [gameTurns, setGameTurns] = useState([]);
	const [activePlayer, setActivePlayer] = useState("X");

	const handleSelectSquare = (rowIndex, colIndex) => {
		setActivePlayer((currentActivePlayer) => (currentActivePlayer === "X" ? "O" : "X"));

		setGameTurns((prevTurns) => {
			let currentPlayer = "X";

			if (prevTurns[0]?.player === "X") currentPlayer = "O";

			return [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
		});
	};

	return (
		<main>
			<div id="game-container">
				<ol
					id="players"
					className="highlight-player"
				>
					<Player
						{...players[0]}
						isActive={activePlayer === "X"}
					/>
					<Player
						{...players[1]}
						isActive={activePlayer === "O"}
					/>
				</ol>
				<GameBoard
					onSelectSquare={handleSelectSquare}
					turns={gameTurns}
				/>
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}
