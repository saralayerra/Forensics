const CaseRegistration = artifacts.require("CaseRegistration");

module.exports = function (deployer) {
  deployer.deploy(CaseRegistration);
};