import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const isProduction = process.env.NODE_ENV = 'production';

console.log(isProduction);

function buildJS(input, output, format) {
  const defaultOutputConfig = {
    format,
    exports: 'named',
    sourcemap: true,
  };
  const esOutputConfig = {
    ...defaultOutputConfig,
    dir: output,
  };
  const cjsOutputConfig = {
    ...defaultOutputConfig,
    file: output,
  };

  return {
    input,
    external: ['react'],
    output: [
      format === 'es' ? esOutputConfig : cjsOutputConfig,
    ],
    plugins: [
      resolve({
        extensions,
      }),
      peerDepsExternal(),
      commonjs(),
      babel({
        extensions,
        runtimeHelpers: true,
        rootMode: 'upward',
      }),
      json(),
      url(),
      svgr(),
    ],
    preserveModules: format === 'es',
  };
}

export default [
  buildJS('index.ts', 'dist/index.js', 'cjs'),
  buildJS('index.ts', 'dist/esm', 'es'),
];
