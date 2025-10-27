const MailNotification = artifacts.require("MailNotification");

module.exports = function (deployer) {
  deployer.deploy(MailNotification);
};
