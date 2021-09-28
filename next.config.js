

module.exports = {
  webpack(config) {
    config.module.rules.push({
      text: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    })
    return config;
  }
}
