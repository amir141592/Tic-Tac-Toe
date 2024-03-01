const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
	// const [updatedGameBoard, setGameBoard] = useState(initialGameBoard);

	// const updateGameBoard = (rowIndex, colIndex) => {
	// 	setGameBoard((prevGameBoard) => {
	// 		const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];

	// 		updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
	// 		return updatedBoard;
	// 	});

	// 	onSelectSquare();
	// };

	for (const turn of turns) {
		const {
			square: { row, col },
			player,
		} = turn;

		initialGameBoard[row][col] = player;
	}

	return (
		<ol id="game-board">
			{initialGameBoard.map((row, rowIndex) => {
				return (
					<li key={rowIndex}>
						<ol>
							{row.map((playerSymbol, colIndex) => {
								return (
									<li key={colIndex}>
										<button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
									</li>
								);
							})}
						</ol>
					</li>
				);
			})}
		</ol>
	);
}
