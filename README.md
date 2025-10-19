## Note
```
https://chatgpt.com/g/g-p-68edb47a9744819194ac3997b47a6087-hurontoento/c/68f476c7-3634-8320-b0b4-08a90e565841
```

## ref
https://svelte.dev/docs/kit/creating-a-project
https://svelte.dev/docs/cli/sv-create
https://svelte.jp/docs/cli/sv-create


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
npm run dev -- --host --port 6001
```
