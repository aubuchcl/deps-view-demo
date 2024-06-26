FROM node:16-alpine
RUN mkdir -p /app 
WORKDIR /app 
COPY package.json ./
RUN npm install 
COPY ./ ./
CMD HOST=:: npm start
