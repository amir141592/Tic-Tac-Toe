import Player from "./components/Player/Player";

export default function App() {
	const players = [
		{ name: "player 1", symbol: "X" },
		{ name: "player 2", symbol: "O" },
	];

	return (
		<main>
			<div id="game-container">
				<ol id="players">
					<Player {...players[0]} />
					<Player {...players[1]} />
				</ol>
			</div>
		</main>
	);
}
