# Étape 1 : génération du site statique Nuxt
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
# npm install (et pas npm ci) : package-lock.json n'est pas synchronisé, comme dans l'ancien workflow
RUN npm install --no-audit --no-fund
COPY . .
RUN npm run generate

# Étape 2 : nginx sert le dossier généré (port 80)
FROM nginx:1.27-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
