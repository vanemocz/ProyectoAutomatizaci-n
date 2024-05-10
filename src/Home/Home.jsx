import { useNavigate,Link } from "react-router-dom"

import "./Home.css"

export function Home() {

    let enrutador=useNavigate()

    return (
        <>

        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/Home">Servicios sura</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link class="nav-link active" to="/SaludenCasa">Salud en Casa</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/Movilidad">Movilidad</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/Nosotros">Nosotros</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
        <section>
            <img className="img-fluid" src="../../src/assets/seguros-5.png" alt="" />
        </section>
        <section class="container-fluid p-1 bg-dark">
            <div class="row">
                <div class="col-12 text-white fw-bold text-center">
                    <h5>Vanessa Montoya Cruz  y Andres Felipe Hoyos Restrepo</h5>
                    <h5>Medellin, Antioquia</h5>
                    <h5>SURA &copy;</h5>
                </div>
            </div>
        </section>
        </>
    )
}