import { useEffect, useState } from "react";
import { getData } from "../services/fetch";

function UsuariosList() {
    const [listaUsuarios, setListaUsuarios] = useState([]);
    
    useEffect(() => {
        const obtenerUsuarios = async () => {
            const dataUsuarios = await getData()
            setListaUsuarios(dataUsuarios)
        }
        obtenerUsuarios()
    },[listaUsuarios.usuario])

    return (
        <div>
            <h1>Lista de Usuarios</h1>

            {
                listaUsuarios.map((usuario) => 
                <div key={usuario.id}>
                    <p>{usuario.usuario}</p>
                    <p>{usuario.contraseña}</p>
                    <button onClick={editar}>Editar</button>
                    <button onClick={eliminar}>Eliminar</button>
                </div>
            )
            }
        </div>
    )
}

export default UsuariosList;