Proyecto de autenticación base para Login y Register con React + Firebase
1.Lo primero que hicimos fue crear el proyecto con npx create-react-app my-app
2.Luego creamos el proyecto en firebase, donde obtuvimos el código de configuración, permisos para autentificación y base de datos.
3.Este proyecto base contiene el flujo de trabajo estructurado en las siguientes carptetas:
    -Carpeta raíz src.
    -components: archivos Admin.jsx, UserView.jsx
    -firebase: archivo de credencial.js
    -screens: Home.jsx, Login.jsx
    -Apps.js
    -style: globals.css
    -reset.css
4.inicalmente establecemos la comunicación con firebase, realizando las importanciones pertinente junto con los métodos para realizar las solicitudes necesarias.
5.Usamos las promesas por medio de async/await para controlar los cambios de estados.
6. Creamos constante para estos cambios, ya que debemos monitorear la información que recopilamos para poder mostrar vistas especificas de acuerdo al perfil de registro.

Algunos conceptos claves:
    Funciones utilizadas:
   * getAuth: se utiliza para obtener una instancia del SDK de autenticación de Firebase.
   * onAuthStateChanged: método del SDK de autenticación de Firebase que te permite suscribirte a cambios en el estado de autenticación del usuario actual. Esto significa que puedes recibir notificaciones cada vez que el usuario inicia sesión, cierra sesión o cambia su estado de autenticación de alguna otra manera.
   * createUserWithEmailAndPassword: método del SDK de autenticación de Firebase se utiliza para crear una nueva cuenta de usuario con una dirección de correo electrónico y una contraseña. Este método devuelve un Promiseque se resuelve en un UserCredentialobjeto si el usuario se crea correctamente, o lo rechaza con un error si la creación falla.
   * signInWithEmailAndPassword:método del SDK de autenticación de Firebase se utiliza para iniciar sesión en un usuario existente con una dirección de correo electrónico y una contraseña. Este método devuelve un Promiseque se resuelve en un UserCredentialobjeto si el usuario inició sesión correctamente, o lo rechaza con un error si el inicio de sesión falla.

   Nota importante: este proyecto esta enlazado con el proyecto marketplace-service de firebase, consola Gesiel Gimenez