import { useState } from "react";

import GameBoard from "./components/GameBoard.component";
import Header from "./components/Header.component";
import Player from "./components/Player.component";
import Log from "./components/Log.component";
import GameOver from "./components/GameOver.component";

import { WINNING_COMBINATIONS } from "./winning-conditions";

const INITIAL_PLAYERS = {
	X: "Player 1",
	O: "Player 2",
};

const INITIAL_GAME_BOARD = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function driveActivePlayer(gameTurns) {
	return gameTurns[0]?.player == "X" ? "O" : "X";
}

function driveWinner(gameBoard, players) {
	let winner;

	for (const [firstWinningSquare, secondWinningSquare, thirdWinningSquare] of WINNING_COMBINATIONS) {
		const firstSquare = gameBoard[firstWinningSquare.row][firstWinningSquare.column],
			secondSquare = gameBoard[secondWinningSquare.row][secondWinningSquare.column],
			thirdSquare = gameBoard[thirdWinningSquare.row][thirdWinningSquare.column];

		if (firstSquare && firstSquare == secondSquare && firstSquare == thirdSquare) winner = players[firstSquare];
	}

	return winner;
}

function driveGameBoard(gameTurns) {
	const gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

	for (const turn of gameTurns) {
		const {
			square: { row, col },
			player,
		} = turn;

		gameBoard[row][col] = player;
	}

	return gameBoard;
}

export default function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const [players, setPlayers] = useState(INITIAL_PLAYERS);

	let activePlayer;
	let winner;
	let hasDraw;
	let gameBoard;

	activePlayer = driveActivePlayer(gameTurns);
	gameBoard = driveGameBoard(gameTurns);
	winner = driveWinner(gameBoard, players);
	hasDraw = gameTurns.length === 9 && !winner;

	function selectSquare(row, col) {
		// ? don't use activePlayer state value for updating gameTurns state because we won't have the latest value of activePlayer state
		// ? when we want to update an state of type object or array, we should clone it then update the clone and return the clone
		setGameTurns((curGameTurns) => {
			activePlayer = driveActivePlayer(curGameTurns);

			return [{ player: curGameTurns[0]?.player == "X" ? "O" : "X", square: { row, col } }, ...curGameTurns];
		});
	}

	function restartGame() {
		setGameTurns([]);
	}

	function setPlayerName(symbol, newName) {
		setPlayers((curPlayers) => ({ ...curPlayers, [symbol]: newName }));
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
							initName={INITIAL_PLAYERS.X}
							symbol="X"
							isActive={activePlayer == "X"}
							onChangeName={setPlayerName}
						/>
						<Player
							initName={INITIAL_PLAYERS.O}
							symbol="O"
							isActive={activePlayer == "O"}
							onChangeName={setPlayerName}
						/>
					</ol>
					{(winner || hasDraw) && (
						<GameOver
							winner={winner}
							onRestartGame={restartGame}
						/>
					)}
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
