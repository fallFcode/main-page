# Use Bun official image
FROM oven/bun:1 as base

WORKDIR /app

# Copy package files and install dependencies
COPY bun.lock package.json ./
RUN bun install

# Copy source code
COPY . .

# Build (if needed, e.g. for Vite/Next)
# RUN bun run build

EXPOSE 5173

CMD ["bun", "run", "start"]
