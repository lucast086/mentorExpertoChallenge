import React, { useState } from "react";
import "./style.css";

const Registro = () => {
	const [nombreUsuario, setNombreUsuario] = useState("");
	const [contrasena, setContrasena] = useState("");
	const [contrasena2, setContrasena2] = useState("");
	const [mensaje, setMensaje] = useState("");
	const [alerta, setAlerta] = useState("visually-hidden alert alert-danger col-10");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (validar(contrasena, contrasena2)) {
			const usuario = {
				nombreUsuario,
				contrasena,
			};
			if (usuarioExiste(nombreUsuario)) {
				setMensaje("El usuario ya Existe");
				setAlerta("alert alert-danger col-10");
			} else {
				// Guardar usuario en localStorage
				localStorage.setItem(nombreUsuario, JSON.stringify(usuario));
				setMensaje("Usuario Registrado con Exito");
				setAlerta("alert alert-success col-10");
			}
		} else {
			setMensaje("Incorrecto");
			setAlerta("alert alert-danger col-10");
		}
		setNombreUsuario("");
		setContrasena("");
		setContrasena2("");
	};

	function usuarioExiste(usuario) {
		const storedUser = localStorage.getItem(usuario);
		return storedUser;
	}

	function validar(contrasenia1, contrasenia2) {
		if (contrasenia1 === contrasenia2 && contrasenia1 !== "") {
			return true;
		} else {
			return false;
		}
	}

	return (
		<div>
			<div className="sizeH row justify-content-center align-items-start p-5 m-0">
				<div className={`${alerta}`} role="alert">
					{mensaje}
				</div>
				<div className="col-3">
					<h2>Registro</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label for="username" class="form-label">
								Email
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
								Ingresa tu email
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
							<label for="exampleInputPassword2" className="form-label">
								Repita la contraseña
							</label>
							<input
								value={contrasena2}
								onChange={(e) => setContrasena2(e.target.value)}
								type="password"
								className="form-control"
								id="exampleInputPassword2"
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Registrarse
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Registro;
