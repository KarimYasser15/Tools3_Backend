pause() {
    echo "Waiting for services to stabilize..."
    sleep $1
}

docker-compose build || { echo "Build failed! Exiting."; exit 1; }

docker-compose up -d || { echo "Failed to start services! Exiting."; exit 1; }

pause 10

docker ps

pause 10


