# Stage 1 - React Build
FROM node:latest as builder
LABEL maintainer="Gary Ascuy<gary.ascuy@gmail.com>"

WORKDIR /react/app
COPY . .
RUN (yarn install && yarn build)

# Stage 2 - Nginx Assets
FROM nginx:alpine
LABEL maintainer="Gary Ascuy<gary.ascuy@gmail.com>"

WORKDIR /usr/share/nginx/html
ENV BACKEND_API_BASE_URL http://localhost:3666
COPY --from=builder /react/app/build .
COPY --from=builder /react/app/build/index.html /index.template.html
COPY ./nginx.conf /etc/nginx/nginx.conf
CMD sh -c "envsubst < /index.template.html > ./index.html && exec nginx -g 'daemon off;'"
