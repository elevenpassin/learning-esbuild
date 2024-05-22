import * as esbuild from 'esbuild'

let result = await esbuild.build({
  entryPoints: ['src/app.tsx'],
  bundle: true,
  outdir: 'dist',
})
console.log(result)