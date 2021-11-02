const { SigningStargateClient, logs } = require("@cosmjs/stargate");

const RPC_URL = "http://testnet.rpc1.monetacoin.moneta.today";
const ADDRESS = "moneta1m5jkx92j9j4r78z8fc27fy4pkq7msmyltqkmh3";

const listTransactionsExample = async () => {
  const client = await SigningStargateClient.connectWithSigner(RPC_URL);

  const txs = await client.searchTx({
    sentFromOrTo: ADDRESS
  });

  const tx = txs[0];
  const parsedRawLog = await logs.parseRawLog(tx.rawLog);
  console.log(logs.findAttribute(parsedRawLog, 'transfer', 'recipient'));
  console.log(logs.findAttribute(parsedRawLog, 'transfer', 'sender'));
  console.log(logs.findAttribute(parsedRawLog, 'transfer', 'amount'));

  const block = await client.getBlock(tx.height);
  console.log(block.header.time);
};

listTransactionsExample();