ssg:
	npx vite build
	npx esbuild src/_ssg.tsx \
		--bundle               \
		--format=cjs           \
		--outfile=src/_ssg.cjs \
		--platform=node        \
		--sourcemap
	node --enable-source-maps src/_ssg.cjs # --enable-source-maps takes precedence
	# npx vite preview --port=3000
