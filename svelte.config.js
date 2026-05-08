import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { enhancedImages } from 'mdsvex-enhanced-images';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { join } from 'path';

const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      remarkPlugins: [enhancedImages],
      extensions: ['.svx'],
      layout: join(process.cwd(), './src/lib/svx-layout.svelte')
    })
  ],
  extensions: ['.svelte', '.svx'],
  kit: {
    adapter: adapter(),
    paths: {
      base: '/foss4g-2027'
    },
    prerender: {
      handleHttpError: 'warn'
    },
    alias: {
      $lib: 'src/lib',
      $components: 'src/components',
      $images: 'src/images',
      $data: 'src/data'
    }
  }
};

export default config;
