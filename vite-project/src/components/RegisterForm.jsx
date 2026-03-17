import { useState } from "react";
import { getData, postUsuarios } from "../services/fetch";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";


function RegisterForm() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");


  const registrar = async () => {
    if (!usuario || !contraseña) {
      console.log("Todos los campos deben estar llenos");
      return
    }

    const usuarios = await getData()
    
    const usuarioEncontrado = usuarios.find((u) => u.usuario === usuario)

    if (usuarioEncontrado) {
      console.log("El usuario ya existe");
      return
    }

    const usuarioRegistro = {
      usuario: usuario,
      contraseña: contraseña
    }

    const usuarioN = await postUsuarios(usuarioRegistro)
    console.log(usuarioN);

    useEffect(() => {
      const navigate = useState(useNavigate())
      navigate("/Login")
    }, [])
    
    }

  return (
    <div>
      <h1>Formulario de Registro</h1>
      <label htmlFor="">Usuario</label>
      <input type="text" id="usuario" placeholder="Digite un usuario" value={usuario} onChange={(evento) => { setUsuario(evento.target.value) }} />
      <br />
      <label htmlFor="">Contraseña</label>
      <input type="password" id="contraseña" placeholder="Digite una contraseña" value={contraseña} onChange={(evento) => { setContraseña(evento.target.value) }} />
      <br />
      <button onClick={registrar}>Registrarse</button>
    </div>
  );
}

export default RegisterForm;