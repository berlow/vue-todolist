module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'build.js'
  },
  resolve:{
      root: [process.cwd() + '/src', process.cwd() + '/node_modules'],
      alias: {},
      extensions: ["",".js"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  }
}
