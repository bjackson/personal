FROM node:5.8.0

RUN mkdir /var/site

WORKDIR /var/site

COPY package.json /var/site

RUN npm install

RUN npm install -g forever

COPY . /var/site

EXPOSE 9000

CMD ["forever", "restart", "/var/site/index.js", "||", "forever", "start", "/var/site/index.js"]