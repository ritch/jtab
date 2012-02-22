jtab: index.js jtab.min.js

jtab.min.js: jtab.js
	uglifyjs jtab.js > jtab.min.js

index.js: jtab.js
	echo "module.exports = " | cat - jtab.js > index.js

PHONY: jtab