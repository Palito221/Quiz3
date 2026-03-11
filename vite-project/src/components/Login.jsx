import React, { useState } from 'react'

function Login() {
  const [nombre,setNombre] = useState("")
  const [edad,setEdad] = useState(0)


  return (
    <div>
          <input type="text" placeholder="Nombre" onChange={(e)=>setNombre(e.target.value)}/>
    </div>
  )
}

export default Login