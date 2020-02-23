# Dockerfile
FROM node:12.14
LABEL authors="Matias Pinto Ramirez"

RUN useradd --user-group --create-home --shell /bin/false app

WORKDIR /usr/src/app/

# Instalacion de angular cli
RUN npm install -g @angular/cli

# Se abre el puerto 4200
EXPOSE 4200