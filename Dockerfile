FROM node:20

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate
RUN npx prisma migrate dev --name init
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]