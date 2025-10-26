# Use Node base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json from the subfolder
COPY my-react-app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the React app
COPY my-react-app ./

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
