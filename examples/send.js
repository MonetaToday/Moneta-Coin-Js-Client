const { DirectSecp256k1HdWallet } = require("@cosmjs/proto-signing");
const { assertIsBroadcastTxSuccess, SigningStargateClient, GasPrice, calculateFee, coins } = require("@cosmjs/stargate");
const { stringToPath } = require("@cosmjs/crypto");
const { Decimal } = require("@cosmjs/math");

const RPC_URL = "http://testnet.rpc1.monetacoin.moneta.today";
const RECEPIENT = "moneta1m5jkx92j9j4r78z8fc27fy4pkq7msmyltqkmh3";
const MNEMONIC = "seed";
const AMOUNT = 100;
const GAS_PRICE = 1;
const GAS_WANTED = 100000;

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