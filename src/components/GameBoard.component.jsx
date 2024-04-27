import { useState } from "react";

const initGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard() {
	const [gameBoard, setGameBoard] = useState(initGameBoard);

	function selectSquare(rowIndex, colIndex) {
		setGameBoard((prevGameBoard) => {
			const clonedGameBoard = [...prevGameBoard.map((row) => [...row])];
			clonedGameBoard[rowIndex][colIndex] = "X";
			return clonedGameBoard;
		});
	}

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((col, colIndex) => (
							<li key={colIndex}>
								<button onClick={() => selectSquare(rowIndex, colIndex)}>{col}</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
