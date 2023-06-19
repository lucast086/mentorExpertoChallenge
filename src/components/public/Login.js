import React, { useState } from "react";
import "./style.css";

const Login = ({ setLoggedIn }) => {
	const [nombreUsuario, setNombreUsuario] = useState("");
	const [contrasena, setContrasena] = useState("");
	const [mensaje, setMensaje] = useState("");
	const [alerta, setAlerta] = useState("visually-hidden alert alert-danger col-10");

	const handleSubmit = (e) => {
		e.preventDefault();

		const usuarioEncontrado = localStorage.getItem(nombreUsuario);

		if (usuarioEncontrado) {
			const usuario = JSON.parse(usuarioEncontrado);
			if (validar(usuario.contrasena, contrasena)) {
				setMensaje("Correcto");
				setAlerta("alert alert-success col-10");
				setLoggedIn(true);
			}
			else {
				setMensaje("Contraseña Incorrecta");
				setAlerta("alert alert-danger col-10");
			}

		} else {
			setMensaje("Usuario Incorrecto");
			setAlerta("alert alert-danger col-10");
		}

		setNombreUsuario("");
		setContrasena("");
	};

	function validar(contrasenia1, contrasenia2) {
		if (contrasenia1 === contrasenia2) {
			return true;
		} else {
			return false;
		}
	}

	return (
		<div className=" sizeH row justify-content-center align-items-start p-5 m-0">
			<div className={`${alerta} `} role="alert">
				{mensaje}
			</div>
			<div className="col-3">
				<h2>Login</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label for="username" class="form-label">
							Usuario
						</label>
						<input
							value={nombreUsuario}
							onChange={(e) => setNombreUsuario(e.target.value)}
							type="email"
							className="form-control"
							id="username"
							aria-describedby="emailHelp"
						/>
						<div id="emailHelp" className="form-text">
							Ingresa el email de registro
						</div>
					</div>
					<div className="mb-3">
						<label for="exampleInputPassword1" className="form-label">
							Contraseña
						</label>
						<input
							value={contrasena}
							onChange={(e) => setContrasena(e.target.value)}
							type="password"
							className="form-control"
							id="exampleInputPassword1"
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Iniciar Sesion
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
