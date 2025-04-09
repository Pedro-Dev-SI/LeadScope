# Etapa de build
FROM node:22 AS builder
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa final
FROM node:22
WORKDIR /src
COPY --from=builder /src/dist ./dist
COPY package*.json ./
RUN npm install --only=production
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
