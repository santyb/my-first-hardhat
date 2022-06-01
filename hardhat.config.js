//Begin
require("@nomiclabs/hardhat-ethers");
require('dotenv').config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "rinkeby",
    networks: {
        hardhat: {
            // // If you want to do some forking, uncomment this
            // forking: {
            //   url: MAINNET_RPC_URL
            // }
        },
        localhost: {
        },
        rinkeby: {
            url: process.env.RINKEBY_RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
            saveDeployments: true,
        }
    },
  solidity: "0.8.13",
};
//End