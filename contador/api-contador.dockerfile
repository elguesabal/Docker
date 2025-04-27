FROM node:20.3.0-alpine3.18
WORKDIR /app
ENV PORT=4242
EXPOSE 4242
COPY api-contador/ .
RUN npm install
CMD [ "node", "app.js"]