import gameLogo from "/game-logo.png";

export default function Header() {
	return (
		<header>
			<img
				src={gameLogo}
				alt="game-logo"
			/>
			<h1>Tic-Tac-Toe</h1>
		</header>
	);
}
