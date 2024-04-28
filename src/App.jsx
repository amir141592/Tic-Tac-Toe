import { useState } from "react";
import GameBoard from "./components/GameBoard.component";
import Header from "./components/Header.component";
import Player from "./components/Player.component";

export default function App() {
	const [activePlayer, setActivePlayer] = useState("X");

	function selectSquare() {
		setActivePlayer((curVal) => (curVal == "X" ? "O" : "X"));
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
						activePlayerSymbol={activePlayer}
					/>
				</div>
			</main>
		</>
	);
}
