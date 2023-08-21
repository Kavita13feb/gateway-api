
const express =require('express');
const { default: Web3 } = require('web3');
const createRouter =express.Router()
const qrcode = require('qrcode');



createRouter.get("/",async(req,res)=>{

    try {
      

        const network="https://bsc-dataseed.binance.org/"
        const web3 = new Web3(network);
        const newAccount = await web3.eth.accounts.create();
        
        console.log(newAccount)
        let walletDetails = {
          address: newAccount.address,
        };
  
        console.log(walletDetails)

        qrcode.toDataURL(newAccount.address, (err, qrCodeDataURL) => {
          if (err) {
            console.error('Error generating QR code:', err);
            res.sendStatus(500);
          } else {
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