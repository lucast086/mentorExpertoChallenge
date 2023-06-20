import React from "react";
import { useNavigate, Link } from "react-router-dom";
import imagenPulsos from "../../../assets/imgs/pulsos.png";
import imagenGithub from "../../../assets/imgs/github.png";
import imagenDiscord from "../../../assets/imgs/discord.png";

const Postulante = ({ loggedIn }) => {
	const navigate = useNavigate();

	return (
		<div>
			{loggedIn ? (
				<div className="p-5">
					<div className="row justify-content-center align-items-center">
						<div className="col-md-6 ">
							<h2 className="fw-normal">
								Rendimiento Academico
								<span className="text-body-secondary"> en Egg Cooperation</span>
							</h2>
							<p className="lead">
								Mentor en numerosas ocaciones, gran cantidad de pulsos otorgados por compañeros, son reflejo de las habilidades blandas de
								comunicacion y liderazgo.
							</p>
						</div>
						<div className="col-md-3">
							<img src={imagenPulsos} className="d-block mx-lg-auto img-fluid" alt="egg theme" width="700" height="500" loading="lazy" />
						</div>
					</div>

					<hr className="my-5"></hr>

					<div className="row justify-content-center align-items-center">
						<div className="col-md-6 order-md-2">
							<h2 className="fw-normal">
								Profesor de clases de apoyo <span className="text-body-secondary">en Egg Cooperation</span>
							</h2>
							<p className="lead">Con muchas ganas de retornar a la comunidad lo aprendido, y porque enseñando es la mejor forma de aprender.</p>
						</div>
						<div className="col-md-4 order-md-1">
							<img src={imagenDiscord} className="d-block mx-lg-auto img-fluid" alt="egg theme" loading="lazy" />
						</div>
					</div>
					<hr className="my-5"></hr>

					<div className="row justify-content-center align-items-center">
						<div className="col-md-6">
							<h2 className="fw-normal">
								Perfil de GitHub <span className="text-body-secondary">explora el proyecto</span>
							</h2>
							<p className="lead">Aqui puedes ver el repositorio donde se encuentra alojado este proyecto</p>
						</div>
						<div className="col-md-5 order-md-1">
							<a href="https://github.com/lucast086/mentorExpertoChallenge" target="_blank">
								<img src={imagenGithub} className="d-block mx-lg-auto img-fluid" alt="egg theme" loading="lazy" />
							</a>
						</div>
					</div>
				</div>
			) : (
				<>
					<div className="hero d-grid flex-column gap-2 d-md-flex justify-content-center align-items-center">
						<h2>DEBES ESTAR LOGUEADO PARA VER ESTA PAGINA</h2>
						<Link className="btn btn-primary btn-lg px-4 me-md-2" to="/login">
							Login
						</Link>
					</div>
				</>
			)}
		</div>
	);
};

export default Postulante;
