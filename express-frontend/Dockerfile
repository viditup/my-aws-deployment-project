# Use official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Run the Express app
CMD ["npm", "start"]
