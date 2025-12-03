.PHONY: setup start stop restart clean shell logs

# First-time setup: create container and initialize project
# setup:
# 	docker-compose up -d
# 	docker-compose exec dev sh -c "npm create vite@latest . -- --template react && npm install"
# 	@echo "Setup complete! Run 'make start' to start the dev server"

# Start the dev server
start:
	docker-compose up -d
	docker-compose exec dev sh -c "cd my-app && npm install && npm run dev"

# View logs
logs:
	docker-compose logs -f dev

# Clean everything (removes containers, images, volumes)
clean:
	docker-compose down -v
	docker system prune -f