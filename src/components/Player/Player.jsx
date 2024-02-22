import { useState } from "react";
import "./Player.css";

export default function Player({ name, symbol }) {
	const [isEditing, setIsEditing] = useState(false);

	const toggleEdit = () => {
		isEditing ? setIsEditing(false) : setIsEditing(true);
	};

	let playername = !isEditing ? (
		<span className="player-name">{name}</span>
	) : (
		<input
			type="text"
			required
		/>
	);

	return (
		<li>
			<span className="player">
				{playername}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={toggleEdit}>Edit</button>
		</li>
	);
}
