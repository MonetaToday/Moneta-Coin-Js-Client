const { DirectSecp256k1HdWallet } = require("@cosmjs/proto-signing");
const { stringToPath } = require("@cosmjs/crypto");

const MNEMONIC = "road flat paper salt drip sport sight excuse move ritual pill produce";

const sendExample = async () => {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    MNEMONIC,
    {
      hdPaths: [stringToPath("m/44'/707'/0'/0/0")],
      prefix: "moneta"
    }
  );
  const [account] = await wallet.getAccounts();
  
  console.log(account);
  return account;
};

sendExample();