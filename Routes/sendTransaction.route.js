const express = require("express");
const { default: Web3 } = require("web3");
const sendTransactionRouter = express.Router();

const axios = require("axios");

sendTransactionRouter.post("/", async (req, res) => {
  // const network="https://bsc-dataseed.binance.org/"
  const network = "https://data-seed-prebsc-1-s1.binance.org:8545/";

  const web3 = new Web3(network);
  const senderPrivateKey = req.body.senderPrivateKey;
  const senderAddress = req.body.senderAddress;
  const recipientAddress = req.body.recipientAddress;
  const amountToTransfer = req.body.amountToTransfer;

  // const sourcePrivateKey = "0xb2c987d6962bc3a947bd397ce4fdbd2c6470880534a11384d274dd4b33e8ec1c";
  const txObject = {
    from: senderAddress,
    to: recipientAddress,
    value: web3.utils.toWei(`${amountToTransfer}`, "ether"),
    gas: web3.utils.toHex(21000), // Set a reasonable gas limit here (adjust as needed)
    gasPrice: web3.utils.toHex(await web3.eth.getGasPrice()),
    nonce: web3.utils.toHex(await web3.eth.getTransactionCount(senderAddress)),
    chainId: 97, // 56 for Binance Smart Chain mainnet, 97 for testnet (adjust accordingly)
  };

  const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPrivateKey);

  const signedTx = await senderAccount.signTransaction(txObject);

  await axios
    .post(network, {
      jsonrpc: "2.0",
      method: "eth_sendRawTransaction",
      params: [signedTx.rawTransaction],
      id: 1,
    })
    .then((response) => {
      console.log(response)
      if(response.data.error){
        res.status(400).send(response.data.error)
      }else{
        res.status(200).send({"Transaction hash": response.data.result});
        }
    })
    .catch((er) => {
      console.log(er);
      res.status(400).send(er.response);
    });
});

module.exports = {
  sendTransactionRouter,
};
