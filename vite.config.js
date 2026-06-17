import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { BootstrapVueNextResolver } from 'bootstrap-vue-next/resolvers';
import { fileURLToPath } from 'node:url';
import Icons from 'unplugin-icons/vite';
import IconsResolve from 'unplugin-icons/resolver';

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    Components({
      resolvers: [
        BootstrapVueNextResolver(),
        IconsResolve()
      ],
      dts: true,
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
      defaultClass: 'u-icon',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
