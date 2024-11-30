# Base image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Set permissions for entrypoint script if needed
RUN chmod +x /usr/src/app/entrypoint.sh

# Expose the application port
EXPOSE 8080

# Use the default NestJS development command
CMD ["npm", "run", "start:dev"]
