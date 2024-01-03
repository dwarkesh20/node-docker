FROM node
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 8181
CMD [ "node", "index.js" ]


