# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the React app using Vite and TypeScript for production
RUN npm run build

# Copy the build files from the previous stage to the NGINX web server directory
COPY --from=0 /app/dist /var/www/html

# Expose port 80
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]