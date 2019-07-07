var express = require("express");
var app = express();

var cors = require('cors')
app.use(cors())

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded




let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';

app.post('/authenticate',(req,res,next)=>{
    if(req.body.email === "mosh@domain.com" && req.body.password === "1234"){
        res.status(200).json({
            token:token
        })
    }
    else{
        res.status(200).json({})
    }
})
app.get('/order',(req,res,next)=>{
    if(req.headers.authorization){

    }
})



app.listen(3000, () => {
 console.log("Server running on port 3000");
});