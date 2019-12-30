FROM node:alpine

RUN rm -rf /app
RUN mkdir /app

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 8082
EXPOSE 8080

CMD ["npm run", "client:dev"]
