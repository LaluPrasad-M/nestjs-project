SHELL := /bin/bash

setup:
	nvm use
	nvm install

start:
	docker compose up -d --build
