import { useState } from 'react'

function LoginForm() {
  const [usuario,setUsuario] = useState("")
  const [contraseña,setContraseña] = useState("")

  const iniciarSesion = async() => {
    if (!usuario || !contraseña) {
      console.log("Todos los campos deben estar llenos");
      return
    }
    
    const usuarios = await getData()
        
    const usuarioVerificado = usuarios.find((u) => u.usuario === usuario && u.contraseña === contraseña)
    
    if (usuarioVerificado) {
      console.log("El usuario ya existe");
      return
    }

    }

  return (
    <div>
      <h1>Formulario de Registro</h1>
      <label htmlFor="usuario">Usuario</label>
      <input type="text" id="usuario" placeholder="Digite un usuario" 
      value={usuario} onChange={(evento) => {setUsuario(evento.target.value)}}/>
      <br />
      <label htmlFor="contraseña">Contraseña</label>
      <input type="password" id="contraseña" placeholder="Digite una contraseña" 
      value={contraseña} onChange={(evento) => {setContraseña(evento.target.value)}}/>
      <br />
      <button onClick={iniciarSesion}>Iniciar Sesión</button>
    </div>
  )
}

export default LoginForm;