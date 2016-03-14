FROM node:5.8.0

RUN mkdir -p /site

WORKDIR /site

COPY . /site

RUN npm install

RUN npm install -g forever

# COPY . /site

EXPOSE 9000

CMD /usr/local/bin/forever restart --fifo /site/index.js || /usr/local/bin/forever start --fifo /site/index.js