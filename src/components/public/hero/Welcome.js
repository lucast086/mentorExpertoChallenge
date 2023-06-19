import React from "react";
import { Link } from "react-router-dom";
import imagen from "../../../assets/imgs/eggImg.png";
import "./Hero.css";

const Welcome = () => {
	return (
		<div>
			<div className="hero row flex-lg-row-reverse align-items-center justify-content-center p-4 m-0">
				<div className="col-10 col-sm-8 col-lg-6">
					<img src={imagen} class="d-block mx-lg-auto img-fluid" alt="egg theme" width="700" height="500" loading="lazy" />
				</div>
				<div className="col-lg-5 col-2 col-sm-4">
					<h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Egg Mentor Experto Challenge</h1>
					<p className="lead">
						Consigna: Desarrolle una aplicación de react donde un usuario tenga que registrarse y posteriormente loguearse. Al hacer login tiene que aparecer
						un mensaje de Correcto si ingresa con los datos validos e incorrecto si no encuentra a ningún usuario registrado con esos datos.
					</p>
					<div className="d-grid gap-2 d-md-flex justify-content-md-start">
						<Link className="btn btn-primary btn-lg px-4 me-md-2" to="/login">
						Login
					</Link>
					<Link className="btn btn-outline-secondary btn-lg px-2 py-2" to="/registro">
						Registro
					</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
