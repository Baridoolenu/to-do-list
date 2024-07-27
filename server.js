//console.log ('happy')

const express = require("express")
const app =  express()



app.get('/',(req,res) =>{
    console.log("here")
    res.sendStatus(500)
    res.send("hi")
})


app.listen(4000)