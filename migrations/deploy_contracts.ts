
type Network = "development" | "test";

/* TA-03 */
module.exports = (artifacts: any /* #TA-04 */ , web3: Web3) => {
    return async (
        deployer: Truffle.Deployer,
        network: Network,
        accounts: Truffle.Accounts
    ) => {
        const ConvertLib = artifacts.require("ConvertLib");
        const MetaCoin = artifacts.require("MetaCoin");
        
        deployer.deploy(ConvertLib);
        deployer.link(ConvertLib, MetaCoin);
        deployer.deploy(MetaCoin);

        const metaCoin = await MetaCoin.deployed();
        console.log(
            `Metacoin deployed at ${metaCoin.address} in network: ${network}.`
        );
    };
 
}; 
