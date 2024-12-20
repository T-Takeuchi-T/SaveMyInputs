setup:
	npm install -d yo generator-web-extension; \
	npm install -d @webextension-toolbox/webextension-toolbox

build:
	NODE_OPTIONS=--openssl-legacy-provider npm run build firefox; \
	NODE_OPTIONS=--openssl-legacy-provider npm run build chrome