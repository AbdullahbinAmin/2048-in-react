# ---------- Build Stage ----------
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --silent

# Copy the rest of the source code
COPY . .

# Build the React app for production
RUN npm run build

# ---------- Production Stage ----------
FROM nginx:alpine

# Copy build output to nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (standard for web apps)
EXPOSE 80

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]