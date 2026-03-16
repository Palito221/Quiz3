import { useState } from "react";
import fetch from "../services/fetch";

function RegisterForm() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const Registrar = async() => {
    if (!usuario || !contraseña) {

            console.log("Todos los campos deben estar llenos");
  }

  const objUsuario = {
    usuario: usuario,
    contraseña: contraseña
  }

  const usuarioAlmacenado = await fetch.postUsuarios(objUsuario);
  console.log(usuarioAlmacenado)

}

  return (
    <div>
      <h1>Formulario de Registro</h1>
      <label htmlFor="">Usuario</label>
      <input type="text" id="usuario" placeholder="Digite un usuario" value={usuario} onChange={(evento) => {setUsuario(evento.target.value)}}/>
      <label htmlFor="">Contraseña</label>
      <input type="password" id="contraseña" placeholder="Digite una contraseña" value={contraseña} onChange={(evento) => {setContraseña(evento.target.value)}}/>
      
      <button onClick={Registrar}>Registrarse</button>
    </div>
  );
}

export default RegisterForm;