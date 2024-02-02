FROM mhart/alpine-node:16
MAINTAINER JC

RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install && npm run build

EXPOSE {{PORT}}

CMD ["npm", "run", "host"]
