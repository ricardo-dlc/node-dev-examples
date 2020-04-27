FROM ricardodlc/docker-nodejs-base-image:latest
WORKDIR /usr/app
COPY /app/package*.json ./
RUN npm install
CMD [ "npm", "run", "test" ]