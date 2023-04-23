# stage 1
FROM node:lts-alpine as builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
RUN npm i nginx
COPY . .
RUN ng build --configuration production
# stage 2
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/dist/out/. /usr/share/nginx/html
EXPOSE 80/tcp

# Run the Nginx server
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]







