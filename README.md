# tyba
## Backend Engineer Test

## Caracteristicas

- Registro de nuevos usuarios
- Logueo de usuarios
- Consulta resturantes cercanos a una longitud y latitud
- Consulta resturantes cercanos por ciudad
- Cierre de sesión 


## Tegnologias

Las siguientes tegnologias fueron utilizadas:

- node.js
- Express 
- JWT 
- Sequelize
- PostgreSQL
- Axios
- bcryptjs
- geoapify

## Instalación

Necesario una version superior a [Node.js](https://nodejs.org/) v10+ 

Install the dependencies and devDependencies and start the server.

```sh
cd Tyba-backend-engineer-test
npm i
```

Se debe contar con un usuario de Postgress y su contraseña, estos datos se deben de actualizar en el archivo
```sh
cd server/config/
vim config.json
```
![image](https://user-images.githubusercontent.com/69372291/159135144-edf8df9c-6482-46bb-8f9a-4cdf79f76160.png)

Una vez hecho esto se ejecuta el ORM y ya la aplicacion puede empezar a funcionar
```sh
npx sequelize-cli db:create
npm start
```

## Endpoints

### Registrarse
 - http://localhost:7000/api/auth/v01/register/signup -
 
Se envia un cuerpo tipo JSON, como se muestra acontinuación:
```sh
{
    "username":"username",
    "password":"password",
    "email":"email@email.com",
    "city": "city"
}
```
## Iniciar Sesión
 - http://localhost:7000/api/auth/v01/register/signin
 
Se envia un cuerpo tipo JSON, como se muestra acontinuación:

```sh
{
    "username":"username",
    "password":"password"
}
```

####  Una vez que la sesion este iniciada, se requiere en el header tener un campo con el nombre "accessToken" y establecer el valor del JWT
![image](https://user-images.githubusercontent.com/69372291/159135123-49b38504-8d0a-4222-8dac-5ebac53252a2.png)


## Cerrar Sesion
- http://localhost:7000/api/auth/v01/register/logout

## Encontrar restaurantes por coordenadas
En el siguiente URL [LON] hace referencia a la longitud y [LAT] a latitud

 - http://localhost:7000/api/coordinates/[LON]/[LAT]

#### Ejemplo
- http://localhost:7000/api/coordinates/-73.639372/4.124857

## Encontrar resturantes por cuidad
En el siguiente URL [CITY] hace referencia a la ciudad
- http://localhost:7000/api/city/[CITY]

#### Ejemplo
http://localhost:7000/api/city/bogota

## Obtener historial de consultas
Al consultar el siguiente URL traera todas las consultas realizadas
- http://localhost:7000/api/history/
