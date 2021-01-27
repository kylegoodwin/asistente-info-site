module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/home': {page: '/'},
            '/about': { page: '/about' },
            '/work': { page: '/work' },
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