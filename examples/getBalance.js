const { SigningStargateClient } = require("@cosmjs/stargate");

const RPC_URL = "http://testnet.rpc1.monetacoin.moneta.today";
const ADDRESS = "moneta1m5jkx92j9j4r78z8fc27fy4pkq7msmyltqkmh3";

const getBalanceExample = async () => {
  const client = await SigningStargateClient.connectWithSigner(RPC_URL);
  const balance = await client.queryClient.bank.balance(ADDRESS, 'micromoneta');

  console.log(balance);
  return balance;
};

getBalanceExample();