const { DirectSecp256k1HdWallet } = require("@cosmjs/proto-signing");
const { stringToPath } = require("@cosmjs/crypto");

const createNewWalletExample = async () => {
  const wallet = await DirectSecp256k1HdWallet.generate(24, {
    hdPaths: [stringToPath("m/44'/707'/0'/0/0")],
    prefix: "moneta"
  });

  const [account] = await wallet.getAccounts();

  console.log(account);
  return account;
};

createNewWalletExample();