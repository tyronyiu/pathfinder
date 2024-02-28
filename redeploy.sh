#!/bin/bash
git pull && \
docker build --tag aps-digital/pathfinder:latest . && \
docker stop pathfinder && \
docker system prune -f && \
docker run -dp 3000:3000 --name=pathfinder aps-digital/pathfinder:latest
