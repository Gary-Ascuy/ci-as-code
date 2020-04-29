FROM node:alpine
LABEL maintainer="Gary Ascuy<gary.ascuy@gmail.com>"

ENV NODE_ENV production
WORKDIR /node/app
COPY . .
RUN yarn install
EXPOSE 3666
CMD yarn start:production
