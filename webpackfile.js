const path = require('path')

module.exports = env => {
  const c = {}

  c.context = path.resolve('src')
  c.entry = ['./index']
  c.output = {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  }

  c.module = {
    rules: [
      {loader: 'babel-loader', test: /\.jsx?/, include: c.context}
    ]
  }

  return c
}
