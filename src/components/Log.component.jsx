export default function Log({ turns }) {
	return (
		<ol id="log">
			{turns.map(({ square: { row, col }, player }) => (
				<li key={`${row}${col}`}>
					{player} selected {row},{col}
				</li>
			))}
		</ol>
	);
}
