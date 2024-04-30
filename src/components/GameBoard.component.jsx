const initGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({ onSelectSquare }) {
	// const [gameBoard, setGameBoard] = useState(initGameBoard);

	// // ? When we want to change an state of type object or array, we must clone it and change the clone then return it
	// function selectSquare(rowIndex, colIndex) {
	// 	setGameBoard((curGameBoard) => {
	// 		const clonedGameBoard = [...curGameBoard.map((row) => [...row])];
	// 		clonedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
	// 		return clonedGameBoard;
	// 	});

	// 	onSelectSquare();
	// }

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((col, colIndex) => (
							<li key={colIndex}>
								<button onClick={onSelectSquare}>{col}</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
