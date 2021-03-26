FROM node:12-alpine as builder


WORKDIR /app


COPY package.json ./
COPY package-lock.json ./

RUN npm install --global gatsby-cli && gatsby telemetry --disable
RUN npm install

# add app
COPY . ./
EXPOSE 8000
# start app
CMD ["gatsby", "develop", "-H", "0.0.0.0"]