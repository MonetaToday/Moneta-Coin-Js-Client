const { SigningStargateClient } = require("@cosmjs/stargate");

const RPC_URL = "http://testnet.rpc1.monetacoin.moneta.today";

const getTotalSupplyExample = async () => {
  const client = await SigningStargateClient.connectWithSigner(RPC_URL);
  const balance = await client.queryClient.bank.supplyOf('micromoneta');

  console.log(balance);
  return balance;
};

getTotalSupplyExample();