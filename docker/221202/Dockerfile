# FROM mysql

# ENV MYSQL_ROOT_PASSWORD=1234

# EXPOSE 3306

FROM node:16
WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 8000

CMD [ "node", "index.js" ]