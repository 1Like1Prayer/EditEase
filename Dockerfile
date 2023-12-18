FROM node:20.10-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy only necessary files for the build
COPY next.config.js ./
COPY .next/standalone ./
COPY ./public ./public
COPY .next/static ./.next/static

# Copy the built files from the GitHub Actions runner
# COPY .next ./.next

# Expose the port that your app will run on
EXPOSE 3000

# Define the command to start your app
CMD ["node", "server.js"]