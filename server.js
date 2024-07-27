//console.log ('happy')

const express = require("express")
const app =  express()

app.set('view engine', "ejs")


app.get('/',(req,res) =>{
    console.log("here")
    res.render('index.html')
})


app.listen(4000)