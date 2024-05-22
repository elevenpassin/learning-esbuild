import * as esbuild from 'esbuild'
import config from './config.dev.mjs'

await esbuild.build(config)