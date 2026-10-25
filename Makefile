.PHONY: well-known

well-known:
	node .well-known/build.cjs
	mkdir -p public/.well-known
	cp -r .well-known/apple-app-site-association public/.well-known/
	cp -r .well-known/assetlinks.json public/.well-known/
