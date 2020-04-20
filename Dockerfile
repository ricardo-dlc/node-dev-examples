FROM ricardodlc/docker-nodejs-base-image:latest
ENV TZ=America/Cancun
RUN apk add -U tzdata && \
    cp /usr/share/zoneinfo/$TZ /etc/localtime
WORKDIR /usr/app
COPY /src/package*.json ./
RUN npm install
# COPY /src .
# WORKDIR /app
# RUN chmod 777 /app/init_project.sh
# RUN pip install -r ../requirements.txt
CMD [ "npm", "run", "test" ]