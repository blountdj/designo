import fs from 'fs';
import path from 'path';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: ['src/js/aboutAnimations.js',
    'src/js/appDesignAnimations.js',
    'src/js/barbaInit.js',
    'src/js/commonAnimations.js',
    'src/js/config.js',
    'src/js/contact-form.js',
    'src/js/contactAnimations.js',
    'src/js/graphicDesignAnimations.js',
    'src/js/homeAnimations.js',
    'src/js/locationsAnimations.js',
    'src/js/location-btns.js',
    'src/js/nav-bar.js',
    'src/js/utilities.js',
    'src/js/webDesignAnimations.js',
  ],
  output: {
    dir: 'dist/js',
    format: 'cjs',
    entryFileNames: '[name].js'
  },
  plugins: [
    nodeResolve(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js'],
      presets: ['@babel/preset-env']
    }),
    terser()
  ]
};