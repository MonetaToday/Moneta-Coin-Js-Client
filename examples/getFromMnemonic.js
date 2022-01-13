const { DirectSecp256k1HdWallet } = require("@cosmjs/proto-signing");
const { stringToPath } = require("@cosmjs/crypto");

const MNEMONIC = "reform notable use power coyote gossip box leg mother today false visual";

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
