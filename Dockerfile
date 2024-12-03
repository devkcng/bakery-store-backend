# Base image
FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x /usr/src/app/entrypoint.sh

EXPOSE 8080

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]

CMD ["npm", "run", "start:dev"]
