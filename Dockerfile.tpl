FROM node:23-alpine
MAINTAINER JC

# Set NODE_ENV to production
ENV NODE_ENV=production

RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install && npm run build

EXPOSE {{PORT}}

CMD ["npm", "run", "host"]
