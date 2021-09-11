//Import Contractconst DStorage = artifacts.require("DStorage");
const DStorage = artifacts.require("DStorage");
const HStorage = artifacts.require("HStorage");

module.exports = function (deployer) {
  //Deploy Contract
  deployer.deploy(DStorage);
  deployer.deploy(HStorage);
};
