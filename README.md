# Integration Excel Exports by dataBase

En este proyecto nos enfocaremos en realizar una web estatica con la funcionalidad de poder extrar informacion de base de datos infresada mediante un formulario.Integrando del lado del front end html,bootstrap,scss,js utilizando handlebars y del lado del back creando las rutas, guardar la info en una base de datos SQL, creando un panel de administrador donde se pueda bajar la info de los usuarios en formato .xlsx (excel) y realizaremos las correspondientes pruebas unitarias con Jest & testing library.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

```
Para este proyecto es necesario tener instalado nodejs y poder levantar una base de datos SQL
```

### Instalación 🔧 y Despliegue 📦

- Levantar la base de datos SQL, puede ser utilizando XAMPP, WAMP o el que prefieras
- Dentro de la raiz del proyecto agregar un archivo .env con las siguientes variables:

```
DB_HOST=localhost
DB_USER=
DB_PASSWORD=
DB_TABLEBNAME=
SECRET_CONFIG=
```
- Una vez la base este ON, en una consola ubicada en el proyecto instalar las dependencias con:
```
npm install
```
- Luego de instalarlas correr el servidor con:
```
npm start
```
- E ingresar en localhost para poder agregar informacio a la base de datos:
```
http://localhost:4000/
```
- O ingresa en el panel de administrador: 
```
http://localhost:4000/panel-admin/
```
- Para ingresar en el panel de administrador usar las credenciales de:
```
User: adminTest
Password: prueba123
```



## Ejecutando las pruebas ⚙️

_Las pruebas generadas con JEST & testing library se inician con el comando "npm TEST" desde la terminal_

### Analice las pruebas end-to-end 🔩

_Las pruebas en su mayor parte unitarias se ocuparan de verificar el funcionamiento frontEnd y se centraran en obtener el mayor Coverage desde el lado del usuario.. Se evaluara hacer testing en el Back_


## Construido con 🛠️

* [NPM](https://www.npmjs.com/) - Manejador de dependencias
* [BOOTSTRAP](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - Framework css
* [JEST]() - Unit testings


## Autores ✒️


* **Lorenzo Lopez** - *FRONT END* - [lololopez200123](https://github.com/lololopez200123)
* **Marcos Trejo** - *BACK END* - [marcos_trejo](https://github.com/marcostrejo2644)


## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.
