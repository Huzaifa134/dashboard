const config = {
    mode: 'production', // "production" | "development" | "none"
    resolve: {
      extensions: ['*', '.mjs', '.tsx', '.json']
    },
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    }
  }
  
  module.exports = config