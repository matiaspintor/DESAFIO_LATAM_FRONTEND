# Dockerfile
FROM node:12.14
LABEL authors="Matias Pinto Ramirez"

RUN useradd --user-group --create-home --shell /bin/false app

WORKDIR /usr/src/app/

# Install the application's dependencies into the node_modules's cache directory.
COPY ./ ./
RUN npm install
# Instalacion de angular cli
RUN npm install -g @angular/cli@8.3.21

# Se abre el puerto 4200
EXPOSE 4200