FROM node:20-alpine AS builder
RUN apk add --no-cache git bash

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build


FROM nginx:alpine

# Copia a build do Vue
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia o default.conf personalizado para o nginx
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
