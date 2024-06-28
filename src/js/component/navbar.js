import React from "react";
import { Link } from "react-router-dom";
import "../../styles/addcontact.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Create Contact</button>
				</Link>
			</div>
		</nav>
	);
};
