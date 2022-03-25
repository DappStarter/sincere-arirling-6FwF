require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note magic essay include globe fortune sort'; 
let testAccounts = [
"0x5bae9996952646ea4864b556758164d83a5a335805c8235cfafa6529d86034be",
"0xef6b5d4d5cf036ae67a8ebecdaffc0b5e212b60a89c73a8ec9876be661b38d4d",
"0xd0adc9818ad231f1d32ba04bbbd979b8a864fed327820c5709ccc3fb6d86b2d4",
"0x03f210d10d55196ed8deb24a6c7984f21a1574e01c9913657bb92edceb7e9703",
"0xe76beb50807028f932ca3eb4236636382f376fbcd303aeb22ec32a21b4648ccd",
"0xcb469bd1708b65c105bbeff5944b049c5b7531e88bbc7821f84fcf6bb6a22940",
"0xf860dae88cc3b08495b578925cb428fb85d9ef6c692e18efdaeaf7f6b3e09848",
"0x94d18f04a3b5904455606251bc4ada472e224bb99cdf5ddc7dcb8f823ef8bb68",
"0x53e77fe7f1ec8432cb3210680058dd6aa156a416c24070dcfc8727a4feff029b",
"0xfc6660eab8c2a0dd14f999d163f25dca1df4cc574537d051cf30e094657e12f0"
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

