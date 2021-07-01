FROM node:14-alpine as builder


WORKDIR /app


COPY package.json ./
COPY package-lock.json ./

RUN npm install --global gatsby-cli@3.8.0 && gatsby telemetry --disable
RUN npm install

# add app
COPY . ./
EXPOSE 8000
# start app
CMD ["gatsby", "develop", "-H", "0.0.0.0"]