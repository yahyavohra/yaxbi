const path = require('path')
 
module.exports = {
    logging: {
        fetches: {
          fullUrl: true,
        },
      },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}