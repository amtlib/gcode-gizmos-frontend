# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Install Yarn
RUN apk add --no-cache yarn

# Set the working directory to /app
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN yarn build

# Expose port 3000
EXPOSE 5000

# Set the command to start the server
CMD ["yarn", "start"]