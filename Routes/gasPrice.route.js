const express =require('express');
const { default: Web3 } = require('web3');
const gasPriceRouter =express.Router()


gasPriceRouter.post("/",async(req,res)=>{
    console.log(req.body)
    const senderAddress =req.body.senderAddress
    const recipientAddress =req.body.recipientAddress
    const amountToTransfer =req.body.amountToTransfer

    const network="https://bsc-dataseed.binance.org/"
    const web3 = new Web3(network);
  

        try {
        // Estimating the gas required for the transaction
        const gasEstimate = await web3.eth.estimateGas({
            from: senderAddress,
            to: recipientAddress,
            value: web3.utils.toWei(amountToTransfer.toString(), "ether"), // Convert to wei
            
        });

        // Getting the current gas price from the network
        const gasPriceWei = await web3.eth.getGasPrice();

        // Calculating the total gas fee in wei
        const totalGasFeeWei = gasPriceWei * gasEstimate;

// console.log(totalGasFeeWei)
        // Converting the total gas fee from wei to BNB using web3.utils.fromWei
        const totalGasFeeBNB = web3.utils.fromWei(
            totalGasFeeWei.toString(),
            "ether"
        );

        console.log("Total Gas Fee in BNB:", totalGasFeeBNB);
        res.send(totalGasFeeBNB)


        } catch (error) {
        console.error("Error occurred:", error.message);
        res.send(error)
        }




})



module.exports={
    gasPriceRouter 
}