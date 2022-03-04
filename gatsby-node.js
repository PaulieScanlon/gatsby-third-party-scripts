const path = require('path');

exports.onPreBuild = async ({ actions: { createRedirect } }) => {
  const { copyLibFiles } = await import('@builder.io/partytown/utils');
  copyLibFiles(path.join(__dirname, 'static', '~partytown'));

  createRedirect({
    fromPath: `/google-analytics?url=:url`,
    toPath: `:url`,
    statusCode: 200
  });
};

exports.createPages = async ({ graphql, actions: { createRedirect } }) => {
  createRedirect({
    fromPath: `/foo/test`,
    toPath: `/bar/test`,
    statusCode: 200
  });
};
