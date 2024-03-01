import { useState } from "react";
import "./Player.css";

export default function Player({ name, symbol, isActive }) {
	const [playerName, setPlayerName] = useState(name);
	const [isEditing, setIsEditing] = useState(false);

	const toggleEdit = () => {
		setIsEditing((editing) => !editing);
	};

	const updatePlayerName = (event) => {
		setPlayerName(event.target.value);
	};

	let playerNameField = !isEditing ? (
		<span className="player-name">{playerName}</span>
	) : (
		<input
			type="text"
			value={playerName}
			required
			onChange={updatePlayerName}
		/>
	);

	return (
		<li className={isActive ? "active" : ""}>
			<span className="player">
				{playerNameField}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={toggleEdit}>{!isEditing ? "Edit" : "Save"}</button>
		</li>
	);
}
