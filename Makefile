.PHONY: dev up down clean install-deps

# Variables
COMPOSE_FILE := docker-compose.yml
CONTAINER_NAME := vite-dev
PROJECT_DIR := my-app

# --- Core Development Rule ---
dev: up install-deps
	@echo "--- Starting Vite development server ---"
	# Access the running container and start the dev server
	docker compose exec $(CONTAINER_NAME) sh -c "cd $(PROJECT_DIR) && npm run dev"

# --- Docker Compose Management ---

# Starts the containers, rebuilding if necessary
up:
	@echo "--- Building and Starting Docker Containers ---"
	# Use --build to automatically build the image if it doesn't exist
	docker compose up --build -d

# Stops and removes containers, networks, and volumes
down:
	@echo "--- Stopping and Removing Containers ---"
	docker compose down

# --- Project Setup (Run inside the container) ---

# This rule handles project creation and dependency installation
install-deps:
	# Check if the project folder exists inside the container
	# If not, create the Vite app and install dependencies.
	@docker compose exec $(CONTAINER_NAME) sh -c 'if [ ! -d "$(PROJECT_DIR)" ]; then \
		echo "--- Setting up new Vite project and installing dependencies ---"; \
		npm create vite@latest $(PROJECT_DIR) -- --template react-ts && \
		cd $(PROJECT_DIR) && \
		npm install; \
	else \
		echo "--- Dependencies already installed or project exists ---"; \
	fi'