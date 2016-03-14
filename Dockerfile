FROM node:5.8.0

RUN mkdir -p /site

WORKDIR /site

COPY . /site

RUN npm install

RUN npm install -g forever

# COPY . /site

EXPOSE 9000

CMD ["forever restart /site/index.js || forever start /site/index.js"]