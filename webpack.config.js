module.exports = {
  entry: [
    './frontend/javascripts/app.tsx'
  ],
  output: {
    path: 'app/assets/javascripts',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.tsx', '.ts', '.js']
  },
  externals: {
    react: 'React'
  },
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts-loader' }
    ]
  }
};
