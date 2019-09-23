import React from "react";

export default function User(props) {
	const { name, username } = props;
	return (
		<div>
			<b>{name}</b>: {username}
		</div>
	);
}
