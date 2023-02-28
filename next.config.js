module.exports = {
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
};
