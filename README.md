## create project
```
npx sv create .
 -> SvelteKit minima

npm i
npm i -D -E svelte@5.22.4 @sveltejs/kit@2 @sveltejs/adapter-node@5 @sveltejs/vite-plugin-svelte@5 vite@6
npm i -D @sveltejs/adapter-node@5
```


## svelte.config.js
```
import adapter from '@sveltejs/adapter-auto';

import adapter from '@sveltejs/adapter-node';
```


## 起動
```
npm run dev -- --host
```
