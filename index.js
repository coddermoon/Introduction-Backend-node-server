const express = require('express')
const app = express()
const port= 5000;

const phones = require('./phones.json')

app.get('/',(req,res)=>{
res.send('hello World from server')

})

app.get('/phones',(req,res)=>{
    res.send(phones)
})
app.get('/phones/:id',(req,res)=>{
    const id = parseInt(req.params.id)
const phone = phones.find(ph=>ph.id===id  )|| {}
res.send(phone) 
})
app.listen(port,()=>{
    console.log('server running on port :',port)
})