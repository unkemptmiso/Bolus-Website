import { pageRegistry } from './src/config/site-manifest.ts';
console.log(pageRegistry.filter(p => p.noindex).map(p => p.path));
