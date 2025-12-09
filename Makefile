.PHONY: up down

# --- Docker Compose Management ---

# Starts the containers, rebuilding if necessary
up:
	@echo "--- Both servers are running ---"
	@echo "Frontend: http://localhost:5173"
	@echo "Backend: http://localhost:3000"
	@echo "View logs with: docker compose logs service_name"
	# Use --build to automatically build the image if it doesn't exist
	docker compose up --build -d

# Stops and removes containers, networks, and volumes
down:
	@echo "--- Stopping and Removing Containers ---"
	docker compose down