import React, { Component } from "react";
import axios from "axios";
import User from "../components/User";

export class Users extends Component {
	state = { users: [], loading: false };

	fetchUsers = async () => {
		console.log("click");
		this.setState({ loading: true });
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then(res => {
				this.setState(prevState => ({ ...prevState, users: res.data, loading: false }));
			})
			.catch(err => console.log(err));
	};

	render() {
		const loading = this.state.loading && <p>loading...</p>;
		const display =
			this.state.users.length > 0
				? this.state.users.map(user => <User key={user.id} {...user} />)
				: null;

		return (
			<div>
				<button onClick={this.fetchUsers}>click</button>
				{loading}
				{display}
			</div>
		);
	}
}

export default Users;
