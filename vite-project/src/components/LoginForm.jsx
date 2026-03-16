import { useState } from 'react'

function LoginForm() {
  const [nombre,setNombre] = useState("")
  const [contraseña,setContraseña] = useState("")


  return (
    <div>
          <input type="text" placeholder="Nombre" onChange={(e)=>setNombre(e.target.value)}/>
    </div>
  )
}

export default LoginForm