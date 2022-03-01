require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remain exchange inflict hen furnace turtle'; 
let testAccounts = [
"0x29b20521022894cde096b423f91914e20e677e02d8b9c83e2fe4a4ad0d7191b4",
"0x46592ce1af7b152bf25a917342100d0af512b83480d862d8ae6bb2b70c926a7a",
"0x010a472ec10a4865ca7c68610612014989fb6f616c84868712038f6380f504b6",
"0x9af178b25b582fec140b751663a643a35247408a648f2972dcbfab14e1822245",
"0x6eb3c8bdd958221f385ed7181c52a9f48540b30dd1dd214cceb30aa6fa7493ea",
"0x21b72e6cb6267ad87dc8622965ae223b7c41892568e7d6fdb10ddc81bc603d8d",
"0xf61834095145502c1d5370c5bd4f76b7522806b363cb73132dfdc798abc0eefd",
"0x34e92aeebdb072d9e2c09251271727192ff6f9bf5820d3cd3af2cba16ec4704b",
"0x12b2003417e681cac5ccbdddcd74a08e9eee7d56480020706b884b5879ebb7e3",
"0x5a72adaf116b5aa078d91366b4be18a45b6a1b54c5ef7c624de385c4e66042be"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

