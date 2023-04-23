# stage 1
FROM node:lts-alpine as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json ./
RUN npm cache clean --force
RUN npm install @angular/cli -g
RUN npm i
COPY . .
RUN ng build --configuration production --output-path=/dist
# stage 2
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /dist .
# Containers run nginx with global directives and daemon off
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]







