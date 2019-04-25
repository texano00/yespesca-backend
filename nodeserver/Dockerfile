FROM node:latest

COPY . /app
WORKDIR /app
RUN rm -rf node_modules && rm package-lock.json
RUN npm i
EXPOSE 3000
CMD npm run start
