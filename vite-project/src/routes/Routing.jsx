import React from "react";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routing =()=> {
  
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="*" element={<div>Página no encontrada</div>} /> 
                * es para la manejar los errores si una página no se encuentra 
                (cómo la de apple que la propia página dice que la página no existe, no lo hace el buscador) */}
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </Router>
  )
}

export default Routing

