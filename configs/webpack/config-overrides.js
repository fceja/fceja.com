const { addWebpackAlias, override } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "./src"),
    "@common": path.resolve(__dirname, "./src/ts/common"),
    "@components": path.resolve(__dirname, "./src/ts/components"),
    "@pages": path.resolve(__dirname, "./src/ts/pages"),
    "@styles": path.resolve(__dirname, "./src/styles"),
    "@appTypes": path.resolve(__dirname, "./src/ts/types"),
    "@utils": path.resolve(__dirname, "./src/ts/utils"),
  })
);
