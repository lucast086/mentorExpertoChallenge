import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

// Componentes
import Registro from "./Registro";
import Login from "./Login";
import Navbar from "./navBar/NavBar";
import Footer from "./footer/Footer";
import Welcome from "./hero/Welcome";
import Postulante from "./hero/Postulante";

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	function PrivateRoute() {
		return <Route render={(props) => (loggedIn ? <Postulante /> : <Link to="/login" />)} />;
	}

	return (
		<Router>
			<div>
				<Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

				<Routes>
					<Route path="/registro" element={<Registro />} />
					<Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
					<Route path="/" element={<Welcome />} />
					< Route exact path="/postulante" element={<Postulante/>}/>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
