.PHONY: dev up down clean install-deps

# --- Frontend Vite Development Setup ---
FRONT_SERVICE_NAME := dev
FRONT_DIR := my-app

# --- Backend Express Setup ---
BACK_SERVICE_NAME := backend
BACK_DIR := app

# --- Core Development Rule ---
# dev: up install-deps
# 	@echo "--- Starting Vite development server ---"
# 	# Access the running container and start the dev server
# 	docker compose exec $(FRONT_SERVICE_NAME) sh -c "cd $(FRONT_DIR) && npm run dev"

enter_vite_container:
	@echo "--- Entering Vite Development Container ---"
	docker compose exec $(FRONT_SERVICE_NAME) sh

enter_express_container:
	@echo "--- Entering Express Backend Container ---"
	docker compose exec $(BACK_SERVICE_NAME) sh

# --- Docker Compose Management ---

# Starts the containers, rebuilding if necessary
up:
	@echo "--- Both servers are running ---"
	@echo "Frontend: http://localhost:5173"
	@echo "Backend: http://localhost:3000"
	@echo "View logs with: make logs"
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
	@docker compose exec $(FRONT_SERVICE_NAME) sh -c 'if [ ! -d "$(FRONT_DIR)" ]; then \
	    echo "--- Project directory missing. Running npm create vite ---"; \
	    npm create vite@latest $(FRONT_DIR) -- --template react-ts; \
	fi && \
	cd $(FRONT_DIR) && \
	echo "--- Running npm install to ensure dependencies are up-to-date ---" && \
	npm install'
	@docker compose exec $(BACK_SERVICE_NAME) sh -c 'if [ ! -d "$(BACK_DIR)" ]; then \
	    echo "--- Project directory missing. Setting up Express app ---"; \
	    mkdir -p $(BACK_DIR) && cd $(BACK_DIR) && npm init -y && npm install express; \
	fi && \
	cd $(BACK_DIR) && \
	echo "--- Running npm install to ensure dependencies are up-to-date ---" && \
	npm install'