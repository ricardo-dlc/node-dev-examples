FROM ricardodlc/docker-nodejs-base-image:latest
ENV TZ=America/Cancun
RUN apk add -U tzdata && \
    cp /usr/share/zoneinfo/$TZ /etc/localtime
WORKDIR /usr/app
COPY /app/package*.json ./
RUN npm install
CMD [ "npm", "run", "test" ]