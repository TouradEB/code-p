// const  express = require('express')
// const app = express()
// const  path = require('path')
// const collection = require("./mangodb.cjs")
// const cors = require('cors')
// import Register from './pages/Register.jsx'

// app.use(express.urlencoded({ extended:true}))
// app.use(express.json())
// app.use(cors())


// app.get("/",cors(),(req,res)=>{
    

// })



// app.post("/",async(req,res)=>{

//   const{nom,prenom,adress, email, password,tel } = req.body
 
//   try{
//     const check = await collection.findOne({email:email})

//     if(check){
//         res.json("exist")
//     }else{
//         res.json("not exist")
//     }

//   }catch(ev){

//     res.json("not exist")

//   }
// });



// app.post("/register",async(req,res)=>{

//     const{ nom,prenom,adress, email, password, tel } = req.body

//     const data ={
//         nom: nom,
//         prenom: prenom,
//         adress: adress,
//         email: email,
//         password: password,
//         tel: tel
        
       
        
//     }
//    //https://youtu.be/S9eCBX-Re8A logine
//     try{
//       const check = await collection.findOne({email:email})
  
//       if(check){
//           res.json("exist")
//       }else{
//           res.json("not exist")
//           await collection.insertMany([data])
//       }
  
//     }catch(er){
  
//       res.json("not exist")
  
//     }
//   });

// app.listen(8000, ()=>{
//     console.log('port connected')
// })