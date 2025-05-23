FROM node:18 as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:18
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist ./dist

EXPOSE 4173
CMD ["serve", "-s", "dist", "-l", "4173"]
