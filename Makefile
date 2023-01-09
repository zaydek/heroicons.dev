ssg:
	npx vite build
	npx esbuild src/_ssg.tsx \
		--bundle               \
		--define:process.env.NODE_ENV="\"production\"" \
		--format=cjs           \
		--outfile=src/_ssg.generated.cjs \
		--platform=node        \
		--sourcemap
	node --enable-source-maps src/_ssg.generated.cjs
	npx vite preview --port=3000
