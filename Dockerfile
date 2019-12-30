FROM node:alpine

RUN rm -rf /app
RUN mkdir /app

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build
RUN mv ./dist/* ./

EXPOSE 8082

CMD ["npm run", "client:dev"]