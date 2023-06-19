import React from "react";
import imagenPulsos from "../../../assets/imgs/pulsos.png";
import imagenGithub from "../../../assets/imgs/github.png";
import imagenDiscord from "../../../assets/imgs/discord.png";

const Postulante = () => {
	return (
		<div className="p-5">
			<div class="row justify-content-center align-items-center">
				<div class="col-md-6 ">
					<h2 class="fw-normal">
						Rendimiento Academico
						<span class="text-body-secondary"> en Egg Cooperation</span>
					</h2>
					<p class="lead">
						Mentor en numerosas ocaciones, gran cantidad de pulsos otorgados por compañeros, son reflejo de las habilidades blandas de comunicacion
						y liderazgo.
					</p>
				</div>
				<div class="col-md-3">
					<img src={imagenPulsos} class="d-block mx-lg-auto img-fluid" alt="egg theme" width="700" height="500" loading="lazy" />
				</div>
			</div>

			<hr class="my-5"></hr>

			<div class="row justify-content-center align-items-center">
				<div class="col-md-6 order-md-2">
					<h2 class="fw-normal">
						Profesor de clases de apoyo <span class="text-body-secondary">en Egg Cooperation</span>
					</h2>
					<p class="lead">
						Con muchas ganas de retornar a la comunidad lo aprendido, y porque enseñando es la mejor forma de aprender.  
					</p>
				</div>
				<div class="col-md-4 order-md-1">
					<img src={imagenDiscord} class="d-block mx-lg-auto img-fluid" alt="egg theme" loading="lazy" />
				</div>
			</div>
			<hr class="my-5"></hr>

			<div class="row justify-content-center align-items-center">
				<div class="col-md-6">
					<h2 class="fw-normal">
						Perfil de GitHub <span class="text-body-secondary">explora el proyecto</span>
					</h2>
					<p class="lead">Aqui puedes ver el repositorio donde se encuentra alojado este proyecto</p>
				</div>
				<div class="col-md-5 order-md-1">
					<a href="https://github.com/lucast086" target="_blank">
						<img src={imagenGithub} class="d-block mx-lg-auto img-fluid" alt="egg theme" loading="lazy" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Postulante;
