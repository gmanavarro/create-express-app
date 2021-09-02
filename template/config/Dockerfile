FROM node:14.16.1-alpine3.13

WORKDIR /app
COPY . .
RUN npm install

ENTRYPOINT ["npm", "run", "start-local-dev-server"]