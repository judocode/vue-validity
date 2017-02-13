import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  dest: 'dist/vue-validity.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'vue-validity',
  sourceMap: false,
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
