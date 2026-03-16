async function getData() {
    try {
        const respuesta = await fetch("http://localhost:3001/usuarios")
        const datosUsuarios = await respuesta.json()

        return datosUsuarios
    } catch (error) {
        console.log("Falló la función registro de productos");
    }
}

async function postUsuarios(usuario) {
    try {
        const respuesta = await fetch("http://localhost:3001/usuarios", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(usuario)
        })
        const datosUsuarios = await respuesta.json()

        return datosUsuarios
    } catch (error) {
        console.log("Falló la función registro de usuarios");
    }
}

async function putUsuarios(usuario, id) {
    try {
        const respuesta = await fetch("http://localhost:3001/usuarios"+id, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(usuario)
        })
        const datosUsuarios = await respuesta.json()

        return datosUsuarios
    } catch (error) {
        console.log("Falló la función de actualizar usuarios");
    }
}

async function deleteUsuarios(usuario, id) {
    try {
        const respuesta = await fetch("http://localhost:3001/usuarios"+id, {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(usuario)
        })
        const datosUsuarios = await respuesta.json()

        return datosUsuarios
    } catch (error) {
        console.log("Falló la función registro de productos");
    }
}

export default {getData, postUsuarios, putUsuarios, deleteUsuarios}