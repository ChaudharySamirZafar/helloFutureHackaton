# Use the Zulu OpenJDK 17 base image
FROM azul/zulu-openjdk:17

# Install Docker CLI and Docker Compose
RUN apt-get update && apt-get install -y docker.io curl

# Set the working directory inside the container
WORKDIR /app

# Copy the Gradle wrapper and other necessary project files to the container
COPY . /app

# Ensure the Gradle wrapper has execute permissions
RUN chmod +x ./gradlew

# Run the Gradle command with debug information
CMD ./gradlew startCorda

