#!/bin/bash
docker container ls | grep gcode-gizmos-frontend | awk '{print $1}' | xargs docker container kill
docker system prune
docker-compose build --no-cache && docker-compose up -d