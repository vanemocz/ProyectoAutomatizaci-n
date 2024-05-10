import { useNavigate } from "react-router-dom"

export function Movilidad() {

    let enrutador = useNavigate()

    return (
        <>
            <section class="container-fluid p-1 bg-dark">
                <div class="row">
                    <div class="col-12 text-white fw-bold text-center">
                        <h5 className="text-center" >MOVILIDAD</h5>
                        <h5 className="text-center" >Servicios con sura</h5>
                    </div>
                </div>
            </section>

            <section class="banner">
            </section>

            <section class="container-fluid my-1">
                <div class="row">
                    <div class="col-6 my-3">
                        <h3 className="text-center">Descripcion del flujo </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, necessitatibus corrupti et nostrum veritatis facere recusandae eaque eum quod odit sit ipsam? Ipsum, harum soluta beatae adipisci laboriosam repellendus ab inventore quis quaerat rerum, explicabo quidem iure iste, saepe cumque voluptatem sapiente praesentium fuga illo numquam natus! Reprehenderit consequuntur blanditiis dolores corrupti neque earum sint aut quidem laudantium sequi similique quae, atque ipsam explicabo voluptatum incidunt quibusdam ullam voluptatibus quam unde aliquid nihil obcaecati! Tenetur temporibus est dolore perferendis harum cum reprehenderit, deserunt alias, in facere vitae reiciendis dolores quisquam ipsam ut deleniti quo eos error sapiente ratione. Numquam, laboriosam error saepe, laborum optio vel quam eius doloremque harum accusamus porro ea officiis at, tempore iste voluptates est. Repellendus eius, eligendi, dolorum perferendis saepe voluptas aliquam vel deserunt consequuntur voluptatibus unde? Ut eaque facere sapiente? Incidunt consequuntur minima praesentium veniam ipsam officia exercitationem quis, magnam ex quae illum, reprehenderit rem obcaecati nihil sapiente, maxime earum dicta ducimus aspernatur dolore mollitia eos? Eius mollitia, nesciunt quia soluta vero obcaecati, quasi neque eum qui quas quisquam, temporibus tempora voluptatem ut? Perspiciatis quam aut ipsa. Harum ipsa est dignissimos, sequi expedita laboriosam placeat earum eveniet eum quo quas alias soluta enim molestiae delectus?</p>
                    </div>
                    <div class="col-6 my-3">
                        <h3 className="text-center">Tipos de choques</h3>
                        <h5>Choque menor:</h5> <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ut dicta ipsa cum quibusdam consequatur, sed voluptates quasi eum quod voluptatum, expedita numquam rem provident quia rerum impedit assumenda ipsam?</p>
                        <h5>Choque lesiones leves:</h5> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur maiores magni magnam nobis dolorem eveniet eum inventore. Numquam nisi assumenda id nostrum cumque explicabo aperiam dolorum, quo, totam sed delectus?</p>
                        <h5>Choque lesiones graves:</h5> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quidem, aliquid, laboriosam illum inventore qui quibusdam illo earum pariatur recusandae voluptate corrupti quis maxime. Repellat, laudantium ipsa! Eaque, sunt culpa!</p>
                        <h5>Choque fatal:</h5> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo accusamus quisquam architecto sapiente porro fugiat exercitationem, corporis omnis dolorum eligendi aut vel, temporibus, culpa molestias obcaecati sed! Sequi, consequatur similique.</p>
                        <h5>Choque daños a propiedad:</h5> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo accusamus quisquam architecto sapiente porro fugiat exercitationem, corporis omnis dolorum eligendi aut vel, temporibus, culpa molestias obcaecati sed! Sequi, consequatur similique.</p>
                    </div>
                </div>
            </section>

            <section class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <img src="../../src/assets/LogoSura.webp" alt="sura" class="img-fluid" />
                    </div>
                    <div class="col-6">
                        <iframe
                            width="640px"
                            height="480px"
                            src="https://forms.office.com/Pages/ResponsePage.aspx?id=_tQLPBERE02ODHwzuet1gcHTAlU8EeFDjtLTf0l2wSxUOFJRNzg1QVdQUTlPVUJVTUREQTlIWFFKUi4u&embed=true"
                            frameBorder={0}
                            marginWidth={0}
                            marginHeight={0}
                            style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
                            allowFullScreen=""
                            webkitallowfullscreen=""
                            mozallowfullscreen=""
                            msallowfullscreen=""
                        >
                            {" "}
                        </iframe>
                    </div>
                </div>
            </section>

            <section class="container-fluid p-1 bg-dark">
                <div class="row">
                    <div class="col-12 text-white fw-bold text-center">
                        <h5>Vanessa Montoya Cruz y Andres Felipe Hoyos Restrepo</h5>
                        <h5>Medellin, Antioquia</h5>
                        <h5>SURA &copy;</h5>
                    </div>
                </div>
            </section>

        </>
    )

}