require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
//require("solidity-coverage")
require("hardhat-gas-reporter")
//require("hardhat-contract-sizer")
require("dotenv").config()

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        rinkeby: {
            chainId: 4,
            blockConfirmations: 6,
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
        },
        mumbai: {
            chainId: 80001,
            blockConfirmations: 6,
            url: MUMBAI_RPC_URL,
            account: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
        },
    },
    gasReporter: {
        enabled: false,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    },
    solidity: "0.8.9",
    namedAccounts: {
        deployer: {
            default: 0,
            1: 0,
            80001: 0,
        },
        player: {
            default: 1,
        },
    },
    mocha: {
        timeout: 300000,
    },
    etherscan: {
        apiKey: {
            rinkeby: "IEN62VTX774ZZG67AUG2X56YT2EX86FIZ3",
            polygon: "XB6PPJAHFC8Y8TFKV3BE47R1X9JM3JS1S4",
            mumbai: "XB6PPJAHFC8Y8TFKV3BE47R1X9JM3JS1S4",
        },
    },
}
