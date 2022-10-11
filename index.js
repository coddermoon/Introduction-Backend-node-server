const express = require('express')
const app = express()
const port= 5000;

app.get('/',(req,res)=>{
res.send('hello World from server')

})

app.listen(port,()=>{
    console.log('server running on port :',port)
})