.PHONY: dist

lint-ts:
	npx tsc --noEmit --skipLibCheck --watch

dev:
	npx vite dev

dist:
	npx vite build
