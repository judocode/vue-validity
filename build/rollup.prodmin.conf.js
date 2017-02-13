import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  dest: 'dist/vue-validity.min.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'vue-validity',
  sourceMap: false,
  plugins: [
    babel({
      exclude: 'node_modules/**',
      externalHelpers: true,
      runtimeHelpers: false,
      babelrc: false,
      presets: [
        ["es2015", { "modules": false }],
        "stage-2"
      ]
    }),
    uglify({}, minify)
  ]
}