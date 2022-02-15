install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-calc:
	node bin/brain-calc.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .
