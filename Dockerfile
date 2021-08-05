FROM node:12

WORKDIR /app

COPY . .

RUN npm install

CMD [ "npm", "start" ]

EXPOSE 3000