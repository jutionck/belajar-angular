FROM node as angular_build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build:prod

FROM nginx
COPY --from=angular_build /app/dist/ /usr/share/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80