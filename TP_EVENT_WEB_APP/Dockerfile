FROM node:22 as build
WORKDIR /app
COPY . .

RUN npm install && npm run build

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3000 

CMD ["nginx", "-g", "daemon off;"]