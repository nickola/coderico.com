include ${HOME}/data/libraries/deployment/makefiles/Makefile.base
include ${HOME}/data/libraries/deployment/makefiles/Makefile.node

main:
	npm run start

build:
	npm run build
