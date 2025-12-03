.PHONY: dev up down clean install-deps

# Variables
COMPOSE_FILE := docker-compose.yml
CONTAINER_NAME := vite-dev
SERVICE_NAME := dev
PROJECT_DIR := my-app

# --- Core Development Rule ---
dev: up install-deps
	@echo "--- Starting Vite development server ---"
	# Access the running container and start the dev server
	docker compose exec $(SERVICE_NAME) sh -c "cd $(PROJECT_DIR) && npm run dev"

enter_vite_container:
	@echo "--- Entering Vite Development Container ---"
	docker compose exec $(SERVICE_NAME) sh

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
	@echo "--- Ensuring project is set up and dependencies are installed/updated ---"
	@docker compose exec $(SERVICE_NAME) sh -c 'if [ ! -d "$(PROJECT_DIR)" ]; then \
	    echo "--- Project directory missing. Running npm create vite ---"; \
	    npm create vite@latest $(PROJECT_DIR) -- --template react-ts; \
	fi && \
	cd $(PROJECT_DIR) && \
	echo "--- Running npm install to ensure dependencies are up-to-date ---" && \
	npm install'