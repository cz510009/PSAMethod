module.exports = {
    devServer: {
        proxy: {
            '/api/': {
                target: 'http://localhost:8080'
            }
        }
    },
    pages: {
        index: {
          entry: "src/main.js",
          title: "TenZ式AIM感度調整 for VALORANT",
        }
      }
};