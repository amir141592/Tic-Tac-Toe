const initGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
	const gameBoard = initGameBoard;

	for (const turn of turns) {
		const {
			square: { row, col },
			player,
		} = turn;

		gameBoard[row][col] = player;
	}

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((col, colIndex) => (
							<li key={colIndex}>
								<button onClick={() => onSelectSquare(rowIndex, colIndex)}>{col}</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
