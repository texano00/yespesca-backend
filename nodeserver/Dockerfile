FROM node:latest

COPY . /app
WORKDIR /app
RUN rm -rf node_modules
RUN npm i
EXPOSE 80
CMD npm run start
