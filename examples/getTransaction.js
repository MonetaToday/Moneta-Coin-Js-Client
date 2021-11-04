const { SigningStargateClient, logs } = require("@cosmjs/stargate");

const RPC_URL = "http://testnet.rpc1.monetacoin.moneta.today";
const TX_HASH = "98828DAE01F0340A8344540AAA899F751CD830838F7D065F4E1C6E65F8776226";

const listTransactionsExample = async () => {
  const client = await SigningStargateClient.connectWithSigner(RPC_URL);

  const tx = await client.getTx(TX_HASH);
  const parsedRawLog = await logs.parseRawLog(tx.rawLog);
  console.log(logs.findAttribute(parsedRawLog, 'transfer', 'recipient'));
  console.log(logs.findAttribute(parsedRawLog, 'transfer', 'sender'));
  console.log(logs.findAttribute(parsedRawLog, 'transfer', 'amount'));

  const block = await client.getBlock(tx.height);
  console.log(block.header.time);
};

listTransactionsExample();