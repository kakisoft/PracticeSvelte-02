import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    // ローカル開発中に警告が出たら有効化（任意）
    // csrf: { trustedOrigins: ['http://localhost:5173'] }
  }
};

export default config;
