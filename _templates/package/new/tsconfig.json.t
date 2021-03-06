---
to: packages/<%= name %>/tsconfig.json
---
{
  "extends": "../../tsconfig.common.json",
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./dist"
  },
  "include": ["src"]
}