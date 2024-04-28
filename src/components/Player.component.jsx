import { useState } from "react";

export default function Player({ initName, symbol, isActive }) {
	const [name, setName] = useState(initName);
	const [isEditing, setIsEditing] = useState(false);

	function changeName(event) {
		setName(event.target.value);
	}

	function toggleIsEditing() {
		// ? always use a function if you want to change state value based on its prev value
		setIsEditing((curVal) => !curVal);
	}

	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{isEditing ? (
					<input
						type="text"
						value={name}
						onChange={changeName}
						required
					/>
				) : (
					<span className="player-name">{name}</span>
				)}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={toggleIsEditing}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
