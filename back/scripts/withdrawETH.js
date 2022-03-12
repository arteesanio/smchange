const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS, EXCHANGE_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const signers = await ethers.getSigners();
  // const [deployer] = await ethers.getSigners();
  // console.log(signers)
  console.log(`${signers.length} signers`);
  let deployer = signers[0]
  console.log(`Deploying address: ${deployer.address}`);

  // Address of the whitelist contract that you deployed in the previous module
  const contractAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS;

  const Box = await ethers.getContractFactory('CryptoDevToken');
  const box = await Box.attach(contractAddress);
  // Call the retrieve() function of the deployed Box contract
  // const done = await box.withdraw();

  // print the address of the deployed contract
  console.log(
    "Crypto Dev Token Contract withdraw at:",
    contractAddress
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
