module.exports = function (eleventyConfig) {
  eleventyConfig.addHandlebarsHelper("lowercase", function (value) {
    return value.toLowerCase();
  });

  return {
    dir: {
      output: "dist",
    },
  };
};
