.PHONY: all build publish

all: build publish

build:
	@node .well-known/build.js

publish:
	@mkdir -p published/.well-known
	@cp .well-known/assetlinks.json published/.well-known
	@cp .well-known/apple-app-site-association published/.well-known
