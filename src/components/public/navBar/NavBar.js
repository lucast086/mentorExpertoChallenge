import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = ({ loggedIn, setLoggedIn }) => {
	const logout = () => {
		setLoggedIn(false);
	};

	return (
		<nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark" id="#top">
			<div className="container justify-content-between">
				<div>
					<Link className="navbar-brand" to="/">
						<span className="challenge">Challenge</span>
					</Link>
				</div>
				{loggedIn ? (
					<div>
						<Link className="btn btn-outline-warning me-2" to="/postulante">
							Postulante
						</Link>
						<Link className="btn btn-outline-danger me-2" to="/login" onClick={logout}>
							Logout
						</Link>
					</div>
				) : (
					<div>
						<Link className="btn btn-outline-primary me-2" to="/login">
							Login
						</Link>
						<Link className="btn btn-sm btn-outline-secondary" to="/registro">
							Registro
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
