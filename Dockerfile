# Use the official Node.js image as the base image
FROM node:22

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

RUN npm install --global @expo/ngrok@^4.1.0

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 8081
EXPOSE 8081

# Start the application
CMD ["sh", "-c", "npm run docker | tee /usr/src/app/out.txt"]