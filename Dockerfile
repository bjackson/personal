FROM node:5.8.0

RUN mkdir /site

WORKDIR /site

COPY package.json /site

RUN npm install

RUN npm install -g forever

COPY . /site

EXPOSE 9000

CMD ["forever", "restart", "/site/index.js", "||", "forever", "start", "/site/index.js"]