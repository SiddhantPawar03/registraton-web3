const balance = artifacts.require("Balance");

module.exports = function (deployer) {
  deployer.deploy(balance);
};