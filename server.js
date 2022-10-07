const express = require('express')
const mongoose= require('mongoose')
const morgan=require('morgan')
const path=require('path')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT ||8080

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )
  
app.use(morgan('tiny'))

app.get('/api',(req,res)=>{
    const data={
        username:'apimays17',
        age:10
    }
    res.json(data)
})

app.get('/api/user',(req,res)=>{
    const data={
        username:'dmays17',
        age:5
    }
    res.json(data)
})

app.listen(PORT,
    console.log(`Server on ${PORT}`))