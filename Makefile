.PHONY: all well-known dependencies build

all: well-known dependencies build

well-known:
	node .well-known/build.js
	mkdir -p public/.well-known
	cp -r .well-known/apple-app-site-association public/.well-known/
	cp -r .well-known/assetlinks.json public/.well-known/

dependencies:
	npm ci

build:
	npm run generate
