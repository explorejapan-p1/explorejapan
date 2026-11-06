FROM node:22-bookworm-slim
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY server.js ./
COPY lib ./lib
COPY generic-instructions.md .
COPY sarah-instructions.md ./
ENV NODE_ENV=production PORT=3000
EXPOSE 3000
CMD ["node", "server.js"]
