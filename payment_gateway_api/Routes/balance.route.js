const express =require('express');
const { default: Web3 } = require('web3');
const balanceRouter =express.Router()

balanceRouter.post("/",async(req,res)=>{
    const walletAddress= req.body.walletAddress
    console.log(req.body)

    try {
        const network="https://bsc-dataseed.binance.org/"

        const web3 = new Web3(network);
        const accountBalance = await web3.eth.getBalance(walletAddress);
        const Balance=web3.utils.fromWei(accountBalance, 'ether')
        res.status(200).send({"Balance":Balance})

         
      } catch (error) {
        console.error('Error getting the account balance:', error);
        res.status(400).send(error)
      }


})


module.exports={
    balanceRouter 
}