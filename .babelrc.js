module.exports = {
  presets: [
    ['@babel/env', {
      targets: {
        browsers: ['last 1 version', '> 1%'],
      }
    }]
  ]
};
