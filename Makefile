PROJECTNAME="sua.js"
DESC="sua.js"

all: clean test build jsdoc

setup:
	npm install . 

build:
	@echo
	@echo "info: build start."
	./build.sh

clean:
	@echo
	@echo "info: clean start."
	rm -f sua.min.js

.PHONY: all test build clean
