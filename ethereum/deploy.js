const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/JobFactory.json");
//0xd8D37155Aa4BF82851D3DaFCAe7350e92B957Fa3
const provider = new HDWalletProvider(
  "lyrics donor will pony rabbit response claw spice drive evoke provide switch",
  "https://rinkeby.infura.io/v3/6327847cebdc4efd939c08ff6a6b2c09"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: "0x" + compiledFactory.bytecode }) // add bytecode
    .send({ from: accounts[0] }); // remove gas

  console.log("Contract deployed to", result.options.address);
};
deploy();
