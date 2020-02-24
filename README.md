# DESAFIO_LATAM_FRONTEND
Frontend en Angular 8 que se encarga de consumir el API Rest desarrollado como test para desafio latam
- Angular cli 8.3.21
- npm version 12.14.0
- TypeScript version 3.7.4
- Bootstrap version 4.4.1 (integracion por CDN)

# Deployment con Docker for windows
Para ejecutar la aplicacion con docker es necesario tener instalado docker

- Ejecutar Docker
- Abrir la linea de comandos y situarse a la carpeta del proyecto donde se encuentra el Dockerfile y el docker-compose.yml
- Para crear la imagen de npm y del proyecto, ejecutar
```
docker-compose up
```
- Ejecutar el comando para crear el contenedor
```
docker run -ti --rm -p 4200:4200 desafio_latam_frontend_frontend bash
```
- Ahora con el contenedor inicializado ejecutar dentro del contenedor npm start para inciar la aplicacion angular que estara escuchando en el puerto 4200
```
npm start
```
- La aplicacion se encontrara escuchando en el puerto 4200
- URL de la aplicacion http://localhost:4200/

# Deployment sin Docker

- Instalar node js en su maquina local
- Instalar angular cli de forma global
```
npm install -g @angular/cli
```
- Abrir la consola y dirigirse a la ruta donde se encuentra el proyecto y ejecutar el comando para instalar las dependencias
```
npm install --save-dev @angular-devkit/build-angular
```
- Ejecutar el siguiente comando para inicializar la aplicacion
```
ng serve -o
```

* Nota: No se realizo el formulario de ingreso de usuarios, ya que el ejercicio no lo solicita, pero en algun otro escenario lo mas probable es que se ubiera incluido. *
* Nota 2: En la tabla cuando el usuario esta de cumpleaños, se muestra en la ultima columna un boton para ver el poema en una ventana modal. *