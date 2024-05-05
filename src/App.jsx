import { useState } from "react";

import GameBoard from "./components/GameBoard.component";
import Header from "./components/Header.component";
import Player from "./components/Player.component";
import Log from "./components/Log.component";
import { WINNING_COMBINATIONS } from "./winning-conditions";

const initGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function changeActivePlayer(gameTurns) {
	return gameTurns[0]?.player == "X" ? "O" : "X";
}

export default function App() {
	const [gameTurns, setGameTurns] = useState([]);

	let activePlayer = "X";
	let winner;

	const gameBoard = initGameBoard;

	for (const turn of gameTurns) {
		const {
			square: { row, col },
			player,
		} = turn;

		gameBoard[row][col] = player;
	}

	for (const combo of WINNING_COMBINATIONS) {
		const firstSquare = gameBoard[combo[0].row][combo[0].column];
		const secondSquare = gameBoard[combo[1].row][combo[1].column];
		const thirdSquare = gameBoard[combo[2].row][combo[2].column];

		if (firstSquare && firstSquare == secondSquare && firstSquare == thirdSquare) winner = firstSquare;
	}

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
					{winner && <p>player with symbol {winner} has won!</p>}
					<GameBoard
						onSelectSquare={selectSquare}
						board={gameBoard}
					/>
				</div>
				<Log turns={gameTurns} />
			</main>
		</>
	);
}
