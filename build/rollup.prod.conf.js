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
      exclude: 'node_modules/**',
      externalHelpers: true,
      runtimeHelpers: false,
      babelrc: false,
      presets: [
        ["es2015", { "modules": false }],
        "stage-2"
      ],
    })
  ]
}
