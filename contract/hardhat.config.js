require("dotenv").config();

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: `${process.env.ALCHEMY_MUMBAI_API_URL}${process.env.ALCHEMY_MUMBAI_API_KEY}`,
      // url: "https://polygon-mumbai.g.alchemy.com/v2/TeNOZN8zN_nCMsTtqB6r22SS1SHT8iaE",
      accounts: [`${process.env.WALLET_PRIVATE_KEY_ADDR1}`],
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY,
  },
};
