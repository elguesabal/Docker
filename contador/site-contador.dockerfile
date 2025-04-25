FROM node:20.3.0-alpine3.18
WORKDIR /app
COPY site-contador/ .
RUN npm install
CMD [ "npm", "run", "dev", "--", "--host" ]