# Use the official lightweight Node.js 18 image.
# https://hub.docker.com/_/node
FROM node:18-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND pnpm-lock.yaml are copied.
COPY package.json pnpm-lock.yaml ./

# Enable pnpm via corepack and install all dependencies.
RUN corepack enable && corepack prepare pnpm@11.18.0 --activate
RUN pnpm install --frozen-lockfile

# Copy local code to the container image.
COPY . .

# Build the app
RUN pnpm run build

# Run the web service on container startup.
CMD [ "pnpm", "start" ]
