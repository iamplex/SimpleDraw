import noderesolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import {uglify} from 'rollup-plugin-uglify'
import buble from 'rollup-plugin-buble'
import sourcemaps from 'rollup-plugin-sourcemaps'

export default {
  input: 'src/index.js',
  output: {
    file: 'build/sd.js',
    format: 'umd',
    name: 'sd',
    sourcemap: true
  },
  plugins: [
    noderesolve(),
    commonjs(),
    buble(),
    uglify(),
    sourcemaps()
  ]
}