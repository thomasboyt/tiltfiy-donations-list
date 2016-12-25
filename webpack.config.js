module.exports = {
  entry: {
    app: './client/entry.tsx',
  },

  output: {
    path: './build',
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.tsx', '.ts'],

    alias: {
      '__root': process.cwd(),
    },
  },

  devtool: 'source-map',

  ts: {
    compilerOptions: {
      noEmit: false,
    },
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts',
      },

      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },

      {
        test: /\.jpg$|\.png$/,
        loader: 'file',
      }
    ]
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {'^/api' : ''},
      },
    }
  },
};
