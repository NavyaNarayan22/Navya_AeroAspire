# 1️⃣ Use official Node.js image
FROM node:20-alpine

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy all source files
COPY . .

# 6️⃣ Build the production Vite app
RUN npm run build

# 7️⃣ Install a simple static server to serve the build
RUN npm install -g serve

# 8️⃣ Expose the port
EXPOSE 5173

# 9️⃣ Start the server
CMD ["serve", "-s", "dist", "-l", "5173"]
