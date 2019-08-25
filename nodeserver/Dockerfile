FROM node:latest

COPY . /app
WORKDIR /app
RUN rm -rf node_modules
RUN npm i
EXPOSE 8080
CMD npm run start
