import { Home } from "../Home/Home";
import { SaludenCasa } from "../SaludenCasa/SaludenCasa";
import { Movilidad } from "../Movilidad/Movilidad";
import { Nosotros } from "../Nosotros/Nosotros";

import {Route, Routes} from "react-router-dom"
import { BrowserRouter } from "react-router-dom";

export function Rutas(){

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home></Home>} ></Route>
                <Route path="/SaludenCasa" element={<SaludenCasa></SaludenCasa>} ></Route>
                <Route path="/Movilidad" element={<Movilidad></Movilidad>} ></Route>
                <Route path="/Nosotros" element={<Nosotros></Nosotros>} ></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}