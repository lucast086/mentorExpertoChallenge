import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Componentes
import Registro from "./Registro";
import Login from "./Login";
import Navbar from "./navBar/NavBar";
import Footer from "./footer/Footer";
import Welcome from "./hero/Welcome";
import Postulante from "./hero/Postulante";

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<Router>
			<div>
				<Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

				<Routes>
					<Route path="/registro" element={<Registro loggedIn={loggedIn} />} />
					<Route path="/login" element={<Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} />
					<Route path="/" element={<Welcome />} />
					<Route exact path="/postulante" element={<Postulante loggedIn={loggedIn} />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
