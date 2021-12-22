const { DirectSecp256k1HdWallet } = require("@cosmjs/proto-signing");
const { assertIsBroadcastTxSuccess, SigningStargateClient, GasPrice, calculateFee, coins } = require("@cosmjs/stargate");
const { stringToPath } = require("@cosmjs/crypto");
const { Decimal } = require("@cosmjs/math");

const RPC_URL = "RPC URL";
const RECEPIENT = "moneta1t8u7lu29xp0426sx4gqy393lg04kjt7wgg6gvy";
const MNEMONIC = "mnemonic";
const AMOUNT = 14049764690;
const GAS_PRICE = 1;
const GAS_WANTED = 1000000;

const sendExample = async () => {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    MNEMONIC,
    {
      hdPaths: [stringToPath("m/44'/707'/0'/0/0")],
      prefix: "moneta"
    }
  );
  const [account] = await wallet.getAccounts();
  const client = await SigningStargateClient.connectWithSigner(RPC_URL, wallet);
  
  const gasPrice = new GasPrice(
    new Decimal(GAS_PRICE),
    "micromoneta"
  );
  const amount = coins(AMOUNT, "micromoneta");
  const fee = calculateFee(GAS_WANTED, gasPrice);
  const result = await client.sendTokens(account.address, RECEPIENT, amount, fee);
  console.log(result);
  assertIsBroadcastTxSuccess(result);
};

sendExample();