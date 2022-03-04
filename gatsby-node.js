const path = require('path');

exports.onPreBuild = async ({ actions }) => {
  const { copyLibFiles } = await import('@builder.io/partytown/utils');
  copyLibFiles(path.join(__dirname, 'static', '~partytown'));

  actions.createRedirect({
    fromPath: `/_partytown?url=:url`,
    toPath: `:url`,
    statusCode: 200
  });
};
