const path = require("path");

exports.onPreBuild = async ({ actions: { createRedirect } }) => {
  const { copyLibFiles } = await import("@builder.io/partytown/utils");
  copyLibFiles(path.join(__dirname, "static", "~partytown"));

  createRedirect({
    fromPath: `/google-analytics?url=:url`,
    toPath: `:url`,
    statusCode: 200,
  });
};
