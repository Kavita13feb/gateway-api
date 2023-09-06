// const express = require("express");
// const { default: Web3 } = require("web3");
// const sendToken = express.Router();
// require("dotenv").config();

// const axios = require("axios");
// const { getAccountBalance } = require("../Middlewares/getBalance");
// const { getGasPrice } = require("../Middlewares/gasPrice");




// sendToken.post("/", async (req, res) => {

//     // Set up the connection to Binance Smart Chain
//     // const bscRpcUrl = 'https://bsc-dataseed.binance.org/'; // BSC node URL
//    const bscRpcUrl = "https://data-seed-prebsc-1-s1.binance.org:8545/";

//     const web3 = new Web3(bscRpcUrl);
   
//     // Replace with your own addresses and private key
//     // const senderAddress = '0x1b6E76e180800EA5508C5a8Fb113CC0295dd50Dc';
//     // const senderPrivateKey = '0xb2c987d6962bc3a947bd397ce4fdbd2c6470880534a11384d274dd4b33e8ec1c';
//     const senderPrivateKey ="0x9f947b4e0b9b429d8e7e31c6abd29540ef472d85bbef4c20ab36d204faef8f98";
//     const senderAddress =  "0xB79A520b396ddF4EA074aBEe314e7DFeb366710b";
//     const receiverAddress = '0x1b6E76e180800EA5508C5a8Fb113CC0295dd50Dc';
//     const tokenContractAddress = '0x337610d27c682e347c9cd60bd4b3b107c9d34ddd'; // Address of the token contract
//     // const senderPrivateKey = req.body.senderPrivateKey;
//     // const senderAddress =  req.body.senderAddress;
//     // const recipientAddress = req.body.recipientAddress;
//     // const recipientAddress = req.body.recipientAddress;
//     // const amountToTransfer = req.body.amountToTransfer;
//     // const totalGasFeeBNB = req.body.totalGasFeeBNB;
//     // Create a new account using the private key
//     const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPrivateKey);
    
//     // Set the sender account as the default account
//     web3.eth.accounts.wallet.add(senderAccount);
//     web3.eth.defaultAccount = senderAccount.address;
    
//     // Load the token contract
//     // const abiJson =await axios.get(`https://api.bscscan.com/api?module=contract&action=getabi&address=0x01d9ccD0d98DdFf2567E5A4FB9AB7f606b3fC72a&apikey=N73GUZNSYKZVKWYUBJ7JSBK6F8WP924F4E`)
//     // const abiJson=await axios.get(`https://api-testnet.bscscan.com/api?module=contract&action=getabi&address=0x337610d27c682e347c9cd60bd4b3b107c9d34ddd&apikey=N73GUZNSYKZVKWYUBJ7JSBK6F8WP924F4E`)
//   //   tokenabi = JSON.parse(abiJson.data.result)

//   //   const tokenContract = new web3.eth.Contract(
//   //       tokenabi,
//   //       tokenContractAddress
//   //   );
//   //   // console.log(tokenContract)
//   //  const amountInTokens = 0.1; // Amount you want to send in tokens

// // Convert the amount from tokens to Wei using web3.utils.toWei
// // const amountInWei = web3.utils.toWei(amountInTokens.toString(), 'ether');
// // const txData = tokenContract.methods.transfer(receiverAddress, amountInWei).encodeABI();
   
// fetch(`https://api-testnet.bscscan.com/api?module=contract&action=getabi&address=0x337610d27c682e347c9cd60bd4b3b107c9d34ddd&apikey=N73GUZNSYKZVKWYUBJ7JSBK6F8WP924F4E`)
//     .then((response) => response.text())
//     .then((body) => {
//         console.log(body);
//     }); 
   
  
// // const nonce = await web3.eth.getTransactionCount(senderAddress);
// // console.log(nonce,txData)
// const gasPrice = await web3.eth.getGasPrice();
// console.log(gasPrice,  web3.utils.toHex(gasPrice),web3.utils.fromWei(gasPrice, 'ether'))
// const nonce = 97

// console.log(web3.utils.toHex(nonce))
// const val= await getGasAmount(senderAddress,amountInWei)
// const rawTx = {
//     // nonce:  web3.utils.toHex(nonce),
//     gasPrice: web3.utils.toHex(gasPrice),
//     gasLimit: web3.utils.toHex(51603), 
//     to: tokenContractAddress,
//     data: txData,
//     chainId: 97
// };




    
// });

// const getGasAmount=async(tempAddress,amountToTransfer)=>{
//     // const network="https://bsc-dataseed.binance.org/"
//   const network = "https://data-seed-prebsc-1-s1.binance.org:8545/";
//   //   console.log(req.body)
//    const web3 = new Web3(network);
//    const senderPrivateKey = "0x9f947b4e0b9b429d8e7e31c6abd29540ef472d85bbef4c20ab36d204faef8f98" //source key
//    const senderAddress = "0xB79A520b396ddF4EA074aBEe314e7DFeb366710b";// source  address
//    const recipientAddress = tempAddress; //temp address
//    console.log(senderPrivateKey)
//    // const sourcePrivateKey = "0xb2c987d6962bc3a947bd397ce4fdbd2c6470880534a11384d274dd4b33e8ec1c";
//    // console.log(+amountToTransfer-+balance)
  
//        const txObject = {
//            from: senderAddress,
//            to: recipientAddress,
//            value: web3.utils.toWei(`${amountToTransfer}`, "ether"),
//            gas: web3.utils.toHex(21000), // Set a reasonable gas limit here (adjust as needed)
//            gasPrice: web3.utils.toHex(await web3.eth.getGasPrice()),
//            nonce: web3.utils.toHex(await web3.eth.getTransactionCount(senderAddress)),
//            chainId: 97, // 56 for Binance Smart Chain mainnet, 97 for testnet (adjust accordingly)
//          };
       
//          console.log(txObject,"txobj")
//          const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPrivateKey);
       
//          const signedTx = await senderAccount.signTransaction(txObject);
       
         
//          await axios
//            .post(network, {
//              jsonrpc: "2.0",
//              method: "eth_sendRawTransaction",
//              params: [signedTx.rawTransaction],
//              id: 1,
//            })
//            .then((response) => {
//              // console.log(response)
//              if(response.data.error){
//               //  res.status(400).send(response.data.error)
//               console.log(response.data.error)
//              }else{
//              //   res.status(200).send({"Transaction hash": response.data.result});
//              console.log({"Transaction hash": response.data.result})
             
//               return "success"
               
//             }
//            })
//            .catch((er) => {
//              console.log(er);
//              res.status(400).send(er.response);
//            });
     
   
   
   
  
  
  
//   }


// module.exports = {
//   sendToken,
// };


const express = require("express");
const { default: Web3 } = require("web3");
const sendToken = express.Router();
const fetch = require("node-fetch");
const axios = require("axios");
const { getAccountBalance } = require("../Middlewares/getBalance");
const { getGasPrice } = require("../Middlewares/gasPrice");
//const { getGasAmount } = require("../Middlewares/gasAmount");

require("dotenv").config();

// sendToken.use(getAccountBalance);
// sendToken.use(getGasPrice);
// sendToken.use(getGasAmount)

sendToken.post("/", async (req, res) => {
  // Set up the connection to Binance Smart Chain
  // const bscRpcUrl = 'https://bsc-dataseed.binance.org/'; // BSC node URL
  const bscRpcUrl = "https://data-seed-prebsc-1-s1.binance.org:8545/";

  const web3 = new Web3(bscRpcUrl);

  // Replace with your own addresses and private key
  // const senderAddress = '0x1b6E76e180800EA5508C5a8Fb113CC0295dd50Dc';
  // const senderPrivateKey = '0xb2c987d6962bc3a947bd397ce4fdbd2c6470880534a11384d274dd4b33e8ec1c';
  // const recipientAddress = '0xB79A520b396ddF4EA074aBEe314e7DFeb366710b';
  // const tokenContractAddress = '0x01d9ccD0d98DdFf2567E5A4FB9AB7f606b3fC72a'; // Address of the token contract
  const senderPrivateKey = req.body.senderPrivateKey;
  const senderAddress = req.body.senderAddress;
  const recipientAddress = req.body.recipientAddress;
  const tokenContractAddress = "0x337610d27c682e347c9cd60bd4b3b107c9d34ddd";
  // const senderPrivateKey = "0x9f947b4e0b9b429d8e7e31c6abd29540ef472d85bbef4c20ab36d204faef8f98";
  // const senderAddress =  "0xB79A520b396ddF4EA074aBEe314e7DFeb366710b";
  // const recipientAddress = "0x1b6E76e180800EA5508C5a8Fb113CC0295dd50Dc";
  // const tokenContractAddress = '0x337610d27c682e347c9cd60bd4b3b107c9d34ddd'
  // Create a new account using the private key
  const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPrivateKey);

  // Set the sender account as the default account
  web3.eth.accounts.wallet.add(senderAccount);
  web3.eth.defaultAccount = senderAccount.address;
  console.log(senderAccount.address);
  // Load the token contract
  // const abiJson =await axios.get(`https://api.bscscan.com/api?module=contract&action=getabi&address=0x01d9ccD0d98DdFf2567E5A4FB9AB7f606b3fC72a&apikey=N73GUZNSYKZVKWYUBJ7JSBK6F8WP924F4E`)
  const abiJson = await axios.get( `https://api-testnet.bscscan.com/api?module=contract&action=getabi&address=0x337610d27c682e347c9cd60bd4b3b107c9d34ddd&apikey=N73GUZNSYKZVKWYUBJ7JSBK6F8WP924F4E`
  );
  //  console.log(abiJson)
  tokenabi = JSON.parse(abiJson.data.result);
  //      console.log(tokenabi)

  const tokenContract = new web3.eth.Contract(tokenabi, tokenContractAddress);
  // console.log(tokenContract)
  const amountInTokens = 0.1; // Amount you want to send in tokens

  //  Convert the amount from tokens to Wei using web3.utils.toWei
  const amountInWei = web3.utils.toWei(amountInTokens.toString(), "ether");
  const txData = tokenContract.methods
    .transfer(recipientAddress, amountInWei)
    .encodeABI();

  const nonce = await web3.eth.getTransactionCount(senderAddress);
  console.log(nonce, txData);

  const gasPrice = await web3.eth.getGasPrice();

  const gasEstimateprice = await tokenContract.methods
    .transfer(recipientAddress, amountInWei)
    .estimateGas({
      from: senderAddress,
    })
    .then((gasEstimate) => {
      console.log(gasEstimate);
      return gasEstimate;
    })
    .catch((error) => {
      console.error("Error estimating gas:", error);
    });

  // console.log(gasEstimateprice)
  console.log(
    gasEstimateprice,
    gasPrice,
    web3.utils.toHex(gasPrice),
    web3.utils.fromWei(gasPrice, "ether")
  );
  const totalGasFeeWei = gasPrice * 51603n;
  const totalGasFeeBNB = web3.utils.fromWei(totalGasFeeWei.toString(), "ether");
  console.log(totalGasFeeBNB);
  // const transactionFee =await getGasAmount(senderAddress,totalGasFeeBNB)
  // console.log(transactionFee)

  const txObject = {
    from: "0xB79A520b396ddF4EA074aBEe314e7DFeb366710b",
    to: senderAddress,
    value: web3.utils.toWei(`${totalGasFeeBNB}`, "ether"),
    gas: web3.utils.toHex(21632), // Set a reasonable gas limit here (adjust as needed)
    gasPrice: web3.utils.toHex(await web3.eth.getGasPrice()),
    nonce: web3.utils.toHex(
      await web3.eth.getTransactionCount(
        "0xB79A520b396ddF4EA074aBEe314e7DFeb366710b"
      )
    ),
    chainId: 97, // 56 for Binance Smart Chain mainnet, 97 for testnet (adjust accordingly)
  };

  console.log(txObject, "txobj");
  const sourceAccount = web3.eth.accounts.privateKeyToAccount(
    "0x9f947b4e0b9b429d8e7e31c6abd29540ef472d85bbef4c20ab36d204faef8f98"
  );

  const sourcesignedTx = await sourceAccount.signTransaction(txObject);

  await axios
    .post(bscRpcUrl, {
      jsonrpc: "2.0",
      method: "eth_sendRawTransaction",
      params: [sourcesignedTx.rawTransaction],
      id: 1,
    })
    .then(async (response) => {
      // console.log(response)
      if (response.data.error) {
        //  res.status(400).send(response.data.error)
        console.log(response.data.error);
      } else {
        //   res.status(200).send({"Transaction hash": response.data.result});
        console.log({ "Transaction hash": response.data.result });
        const accountBalance = await web3.eth.getBalance(senderAddress);
        console.log(accountBalance)
        if (response.data.result) {
          const rawTx = {
            nonce: web3.utils.toHex(
              await web3.eth.getTransactionCount(senderAddress)
            ),
            gasPrice: web3.utils.toHex(gasPrice),
            gasLimit: web3.utils.toHex(51000), // Adjust gas limit accordingly
            to: tokenContractAddress,
            data: txData,
          };
          const signedTx = await senderAccount.signTransaction(rawTx);
          // const signedTx = await web3.eth.accounts.signTransaction(rawTx, senderPrivateKey);
          console.log(signedTx)
      
          setTimeout(async()=>{
            // const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            // console.log('Transaction Receipt:', txReceipt);
            // res.send({"hash":txReceipt.blockHash})
            // res.end()
            await axios
            .post(bscRpcUrl, {
              jsonrpc: "2.0",
              method: "eth_sendRawTransaction",
              params: [signedTx.rawTransaction],
              id: 1,
            })
            .then((response) => {
              // console.log(response)
              if (response.data.error) {
                 res.status(400).send(response.data.error)
                console.log(response.data.error);
              } else {
                  res.status(200).send({"Transaction hash": response.data.result});
                  console.log({ "Transaction hash": response });
                console.log({ "Transaction hash": response.data.result });
              }
            })
            .catch((er) => {
              console.log({ "error in main": er });
              res.status(400).send({ "error in main ": er });
            });
          },3000)

        }
      }
    })
    .catch((er) => {
      console.log({ "error source": er });
      // res.status(400).send({"error source":er});
    });
});

const getGasAmount = async (tempAddress, totalGasFeeBNB) => {
  // const network="https://bsc-dataseed.binance.org/"
  const network = "https://data-seed-prebsc-1-s1.binance.org:8545/";
  //   console.log(req.body)
  const web3 = new Web3(network);
  const PrivateKey =
    "0x9f947b4e0b9b429d8e7e31c6abd29540ef472d85bbef4c20ab36d204faef8f98"; //source key
  const senderAddress = "0xB79A520b396ddF4EA074aBEe314e7DFeb366710b"; // source  address
  const recipientAddress = tempAddress; //temp address
  console.log(PrivateKey);
  // const sourcePrivateKey = "0xb2c987d6962bc3a947bd397ce4fdbd2c6470880534a11384d274dd4b33e8ec1c";
  // console.log(+amountToTransfer-+balance)

  const txObject = {
    from: "0xB79A520b396ddF4EA074aBEe314e7DFeb366710b",
    to: tempAddress,
    value: web3.utils.toWei(`${totalGasFeeBNB}`, "ether"),
    gas: web3.utils.toHex(21632), // Set a reasonable gas limit here (adjust as needed)
    gasPrice: web3.utils.toHex(await web3.eth.getGasPrice()),
    nonce: web3.utils.toHex(
      await web3.eth.getTransactionCount(
        "0xB79A520b396ddF4EA074aBEe314e7DFeb366710b"
      )
    ),
    chainId: 97, // 56 for Binance Smart Chain mainnet, 97 for testnet (adjust accordingly)
  };

  console.log(txObject, "txobj");
  const senderAccount = web3.eth.accounts.privateKeyToAccount(
    "0x9f947b4e0b9b429d8e7e31c6abd29540ef472d85bbef4c20ab36d204faef8f98"
  );

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
      if (response.data.error) {
        //  res.status(400).send(response.data.error)
        console.log(response.data.error);
      } else {
        //   res.status(200).send({"Transaction hash": response.data.result});
        console.log({ "Transaction hash": response.data.result });

        return "success";
      }
    })
    .catch((er) => {
      console.log(er);
      res.status(400).send(er.response);
    });
};

module.exports = {
  sendToken,
};

