FROM node:alpine

RUN mkdir -p /my-portfolio
WORKDIR /my-portfolio
COPY package.json .

RUN apk add --no-cache --virtual .build-deps \
    g++ \
    make \
    autoconf \
    automake \
    libtool \
    nasm \
    libc6-compat \
    libjpeg-turbo-dev \
    libpng-dev \
    git \
    bash \
    && rm -rf /var/cache/apk/* \
    && npm install \
    && npm cache clean --force \
    && apk del .build-deps

ENV TZ America/Toronto