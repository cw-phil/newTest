const path = require('path');
const webpack = require('webpack')

webpack({
    devtool: 'inline-source-map',
    mode: 'production',
      entry: './src/index.ts',
      output: {
          filename: 'main.js',
          path: path.resolve(__dirname, 'dist')
      },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          loader: 'ts-loader'
        }
      ]
    },
    resolve: {
      extensions: [ '.ts', '.js' ]
    }
}, function(err, stats) {

});




  // entries
//   entry: {
//     'js/polyfill': [resolve(SRC_PATH, 'polyfill.ts')],
//     'js/vendor/react': ['react', 'react-dom'],
//     'js/app': [resolve(SRC_PATH, 'index.tsx')],
//   },
//   resolve: {
//     alias: {
//       '_components': resolve(SRC_PATH, 'components'),
//       '_common': resolve(SRC_PATH, 'common'),
//     },
//     extensions: ['.ts', '.tsx', '.js', '.jsx', 'json'],
//     plugins: [new TsconfigPathsPlugin({configFile: resolve(BASE_PATH, 'tsconfig.json')})],
//   },
//   output: {
//     path: BUILD_PATH,
//     filename: '[name].bundle.js',
//     libraryTarget: 'umd',
//   },
//   // modules
//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/,
//         loader: 'ts-loader',
//         options: {
//           transpileOnly: true,
//           experimentalWatchApi: true,
//         },
//         exclude: [/(node_modules|dist)/],
//       },
//       {
//         test: /\.(png|jpg|gif|ico)$/i,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 4000,
//               name: 'images/[name].[ext]',
//               esModule: false,
//             },
//           },
//         ],
//       },
//       {
//         test: /\.css$/,
//         use: ['css-loader'],
//       },
//     ],
//   },