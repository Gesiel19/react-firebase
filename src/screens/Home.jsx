import React from 'react';
import firebaseApp from '../firebase/credenciales';
import { getAuth, signOut } from 'firebase/auth';
import Admin from "../components/Admin"
import UserView from "../components/UserView"

const auth = getAuth(firebaseApp);

function Home({ user }) {
  return (
    <div>Home
      <button onClick={() => signOut(auth)}>Cerrar Sesión</button>
      
      {user.rol === "admin" ? <Admin /> : <UserView />}

    </div>
  )
}

export default Home