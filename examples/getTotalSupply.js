const { SigningStargateClient } = require("@cosmjs/stargate");

const RPC_URL = "RPC URL";

const getTotalSupplyExample = async () => {
  const client = await SigningStargateClient.connectWithSigner(RPC_URL);
  const balance = await client.queryClient.bank.supplyOf('micromoneta');

  console.log(balance);
  return balance;
};

getTotalSupplyExample();