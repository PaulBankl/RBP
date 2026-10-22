
# Schritt 1: Angular bauen
FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build -- --output-path=dist/docker

# Schritt 2: Angular mit Nginx starten
FROM nginx:alpine

COPY --from=build /app/dist/docker/browser/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
