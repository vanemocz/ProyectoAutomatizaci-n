import { useNavigate } from "react-router-dom"
import "./Nosotros.css"

export function Nosotros(){

    let enrutador=useNavigate()

    return(
        <>
        <section class="container-fluid p-1 bg-dark">
                <div class="row">
                    <div class="col-12 text-white fw-bold text-center">
                        <h5 className="text-center" >NOSOTROS</h5>
                        <h5 className="text-center" >Servicios con sura</h5>
                    </div>
                </div>
            </section>

        <section class="QuienesSomos" id="Quienes somos" >
            <h1 class="tituloQS">Quienes somos</h1>
            <p class="parrafoQS">Conozca la comunidad detrás de la inicativa</p>
        </section>
        <section class="InfoPersonal" >
            <div class="personal">
                <img src="../../src/assets/Muñequito.webp" alt="" class="imgpersonal"/>
                <h1 class="nombrePersonal">Vanessa</h1>
                <h2 class="profesion">Desarrolladora</h2>
            </div>
            <div class="personal">
                <img src="../../src/assets/andres2.jpg" alt="" class="imgpersonal"/>
                <h1 class="nombrePersonal">Andres</h1>
                <h2 class="profesion">Automatización</h2>
            </div>
            <div class="personal">
                <img src="../../src/assets/juan.webp" alt="" class="imgpersonal"/>
                <h1 class="nombrePersonal">Juan</h1>
                <h2 class="profesion">Automatización</h2>
            </div>
            <div class="personal">
                <img src="../../src/assets/luisa.webp" alt="" class="imgpersonal"/>
                <h1 class="nombrePersonal">Luisa</h1>
                <h2 class="profesion">Automatización</h2>
            </div>
        </section>
        </>
    )

}