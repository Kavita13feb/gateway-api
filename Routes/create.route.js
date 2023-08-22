
const express =require('express');
const { default: Web3 } = require('web3');
const createRouter =express.Router()
const qrcode = require('qrcode');
var QRCode = require('qrcode')


createRouter.get("/",async(req,res)=>{

  try {
      

    const network="https://bsc-dataseed.binance.org/"
    // const network="https://data-seed-prebsc-1-s1.binance.org:8545/"

    const web3 = new Web3(network);
    const newAccount = await web3.eth.accounts.create();
    
    console.log(newAccount)
    let walletDetails = {
      address: newAccount.address,
    };

    let transactionData = {
      to: newAccount.address,
      value: web3.utils.toWei(`0.00001`, 'ether')
    };
    console.log(walletDetails)
    transactionData=JSON.stringify(transactionData)
    const paymentRequestUrl = `ethereum:${newAccount.address}?value=0.01`;

    qrcode.toDataURL(newAccount.address, (err, qrCodeDataURL) => {
      if (err) {
        console.error('Error generating QR code:', err);
      } else {
        // console.log('QR code data URL:', qrCodeDataURL);
        res.send({ qrCodeDataURL, address: newAccount.address ,key:newAccount.privateKey });
      }
    });
    
  } catch (error) {
    console.error("Error creating the wallet:", error);
    res.status(400).send(error)
  }




})


module.exports={
    createRouter 
}