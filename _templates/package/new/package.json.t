---
to: packages/<%= name %>/package.json
---
{
  "name": "<%= name %>",
  "description": "<%= description %>",
  "version": "0.0.1",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "module": "dist/esm/index.js",
  "scripts": {
    "build": "rm -rf dist/ && rm -rf esm/ && tsc --emitDeclarationOnly --declarationDir dist && rollup -c ../../rollup.config.js",
    "test": "lerna run test",
    "lint": "eslint -c .eslintrc.js 'src/**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "yarn lint --fix",
    "typecheck": "tsc --noEmit"
  }
}