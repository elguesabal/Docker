FROM node:20.3.0-alpine3.18
WORKDIR /app
ARG ARGCONTAINER=$PORTARG
ENV PORT=$ARGCONTAINER
EXPOSE 4242
COPY api-contador/ .
RUN npm install
CMD [ "node", "app.js"]