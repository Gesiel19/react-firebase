
import React, { useState } from 'react'
import firebaseApp from '../firebase/credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

function Login() {
  const [isRegistrando, setRegistrando] = useState(false);
  async function registrarUsuario(email, password, rol) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });

    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`)
    setDoc(docuRef, { corre: email, rol: rol })
  }

  function submitHandler(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;

    if (isRegistrando) {
      registrarUsuario(email, password, rol);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
  }

  return (
    <div>
      <h1> {isRegistrando ? "Registrate" : "Inicia Sesión"} </h1>

      <form onSubmit={submitHandler}>
        <label>
          Correo Electronico:
          <input type="email" id="email" />
        </label>

        <label>
          Contraseña:
          <input type="password" id="password" />
        </label>

        <label>
          Rol:
          <select id="rol">
            <option value="admin"> Administrador</option>
            <option value="user"> Usuario</option>
          </select>
        </label>

        <input type="submit"
          value={isRegistrando ? "Registrate" : "Inicia Sesión"} />
      </form>

      <button onClick={() => setRegistrando(!isRegistrando)}>
        {isRegistrando ? "Ya tengo cuenta" : "Quiero Registrarme"}
      </button>
    </div>
  )
}

export default Login