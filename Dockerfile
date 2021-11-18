FROM node:12.18.1
RUN mkdir -p /app/
WORKDIR /app/

COPY . .

WORKDIR /app/backend/
RUN npm i

WORKDIR /app/backend/lifeblood/

RUN npm i
RUN npm install worker-loader

RUN npm run-script build

RUN useradd -m myuser
USER myuser

WORKDIR /app/backend/

EXPOSE 4000
CMD ["npm", "start"]
