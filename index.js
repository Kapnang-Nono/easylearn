var express = require('express')
var cors = require('cors')

let app = express()
app.use(cors({
    origin: '*'
}));
let port = 5000

// app.get('/',(req ,res)=>{
//     res.send('Hello world')
// })

// app.get('/api/getStudent',(req ,res)=>{
//     let std = {
//         name:'Test',
//         class:'test'
//     }
//     res.status(200).json({student:std})
// })

app.post('/api/createUser',(req ,res)=>{
    console.log("entered")
  
  console.log(req)

    res.status(200).json({message:'User created successfully'})
})

let server = app.listen(port  ,()=>{
    console.log(server)
    console.log("Server up")
})