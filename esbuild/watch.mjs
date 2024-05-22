import * as esbuild from 'esbuild'
import config from './config.dev.mjs'

let ctx = await esbuild.context(config);

await ctx.watch();