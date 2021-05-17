const withPlugins = require("next-compose-plugins");

const nextTranslate = require("next-translate");

const config = {
  devServer: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
};

module.exports = withPlugins([[nextTranslate]], config);
