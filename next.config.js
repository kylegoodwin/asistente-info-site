module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/home': {page: '/'}
        };
    },
    webpack: (config) => {
        config.module.rules.push(
          {
            test: /\.md$/,
            use: 'raw-loader'
          }
        )
    
        return config
      },
}