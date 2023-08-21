const express =require('express')
const cors =require('cors')
const { createRouter } = require('./Routes/create.route')
const { balanceRouter } = require('./Routes/balance.route')
const { sendTransactionRouter } = require('./Routes/sendTransaction.route')
const { gasPriceRouter } = require('./Routes/gasPrice.route')
const app =express()

app.use(express.json())
app.use(cors())
app.use("/create",createRouter )
app.use("/balance",balanceRouter)
app.use("/send", sendTransactionRouter)
app.use("/gas",gasPriceRouter)

app.listen(8080,()=>{
    console.log("listening")
})