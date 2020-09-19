FROM ricardodlc/docker-nodejs-base-image:1.1.1

LABEL author="Ricardo de la Cruz" version="2.1.0"

RUN apk add --no-cache \
    git \
    curl \
    perl \
    coreutils \
    util-linux && \
    cd /tmp && \
    wget -q  https://raw.githubusercontent.com/petervanderdoes/gitflow-avh/develop/contrib/gitflow-installer.sh && \
    sed -i '1s/#!\/bin\/bash/#!\/bin\/sh/' /tmp/gitflow-installer.sh && \
    chmod +x /tmp/gitflow-installer.sh && \
    sh gitflow-installer.sh install stable; rm gitflow-installer.sh && \
    rm -rf /var/tmp/* /tmp/gitflow* /var/cache/apk/*

WORKDIR /usr/app

COPY /app/package*.json ./

RUN npm install

CMD [ "npm", "run", "test" ]