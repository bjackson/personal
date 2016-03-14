FROM node:5.8.0

RUN mkdir -p /site

WORKDIR /site

# COPY . /site

COPY package.json /site

RUN npm install

RUN npm install -g forever

COPY . /site

EXPOSE 9000

CMD /usr/local/bin/forever -c node /site/index.js