const express = require("express");
const { default: Web3 } = require("web3");
const sendTransactionRouter = express.Router();

const axios = require("axios");
const { getAccountBalance } = require("../Middlewares/getBalance");
const { getGasPrice } = require("../Middlewares/gasPrice");
// const { getGasAmount } = require("../Middlewares/gasAmount");

require('dotenv').config();


sendTransactionRouter.use(getAccountBalance)
sendTransactionRouter.use(getGasPrice)
// sendTransactionRouter.use(getGasAmount)

sendTransactionRouter.post("/", async (req, res) => {
  // const network="https://bsc-dataseed.binance.org/"
  const network = "https://data-seed-prebsc-1-s1.binance.org:8545/";
// console.log(req.body)
  const web3 = new Web3(network);
  const senderPrivateKey = req.body.senderPrivateKey;
  const senderAddress =  req.body.senderAddress;
  const recipientAddress = req.body.recipientAddress;
  const amountToTransfer = req.body.amountToTransfer;
  const totalGasFeeBNB = req.body.totalGasFeeBNB;
  await getGasAmount(senderAddress,totalGasFeeBNB).then(async()=>{
   
      const txObject = {
        from: senderAddress,
        to: recipientAddress,
        value: web3.utils.toWei(`${amountToTransfer}`, "ether"),
        gas: web3.utils.toHex(21000), // Set a reasonable gas limit here (adjust as needed)
        gasPrice: web3.utils.toHex(await web3.eth.getGasPrice()),
        nonce: web3.utils.toHex(await web3.eth.getTransactionCount(senderAddress)),
        chainId: 97, // 56 for Binance Smart Chain mainnet, 97 for testnet (adjust accordingly)
      };
    
      console.log(txObject)
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
          // console.log(response)
          if(response.data.error){
            console.log(response.data.error)

            res.status(400).send(response.data.error)
          }else{
            console.log({"Transaction hash": response.data.result})
            res.status(200).send({"Transaction hash": response.data.result});
            }
        })
        .catch((er) => {
          console.log(er);
          res.status(400).send(er.response);
        });
    
  })
  // const sourcePrivateKey = "0xb2c987d6962bc3a947bd397ce4fdbd2c6470880534a11384d274dd4b33e8ec1c";
 
 
  
});



const getGasAmount=async(tempAddress,amountToTransfer)=>{
  // const network="https://bsc-dataseed.binance.org/"
const network = "https://data-seed-prebsc-1-s1.binance.org:8545/";
//   console.log(req.body)
 const web3 = new Web3(network);
 const senderPrivateKey = "0x9f947b4e0b9b429d8e7e31c6abd29540ef472d85bbef4c20ab36d204faef8f98" //source key
 const senderAddress = "0xB79A520b396ddF4EA074aBEe314e7DFeb366710b";// source  address
 const recipientAddress = tempAddress; //temp address
 console.log(senderPrivateKey)
 // const sourcePrivateKey = "0xb2c987d6962bc3a947bd397ce4fdbd2c6470880534a11384d274dd4b33e8ec1c";
 // console.log(+amountToTransfer-+balance)

     const txObject = {
         from: senderAddress,
         to: recipientAddress,
         value: web3.utils.toWei(`${amountToTransfer}`, "ether"),
         gas: web3.utils.toHex(21000), // Set a reasonable gas limit here (adjust as needed)
         gasPrice: web3.utils.toHex(await web3.eth.getGasPrice()),
         nonce: web3.utils.toHex(await web3.eth.getTransactionCount(senderAddress)),
         chainId: 97, // 56 for Binance Smart Chain mainnet, 97 for testnet (adjust accordingly)
       };
     
       console.log(txObject,"txobj")
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
           // console.log(response)
           if(response.data.error){
            //  res.status(400).send(response.data.error)
            console.log(response.data.error)
           }else{
           //   res.status(200).send({"Transaction hash": response.data.result});
           console.log({"Transaction hash": response.data.result})
           
            return "success"
             
          }
         })
         .catch((er) => {
           console.log(er);
           res.status(400).send(er.response);
         });
   
 
 
 



}

module.exports = {
  sendTransactionRouter,
};
