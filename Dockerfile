FROM node:alpine
# Update apk
RUN apk update && apk upgrade
# Create app directory
RUN mkdir -p /app
ADD package.json /app
WORKDIR /app
ENV HOME /app
ENV NODE_ENV development
# Install dependencies
RUN npm install

COPY . /app
EXPOSE 3000
CMD npm start

