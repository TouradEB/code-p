// const express =require('express');
// const  cors = require('cors');
// const mongoose = require('mongoose');
// const User = require('./models/User.js');
// const bcrypt = require('bcryptjs');

// require('dotenv').config()


//  const app = express();

 
// const bcryptSalt = bcrypt.genSaltSync(10);


// app.use(express.json());


// app.use(cors({
//     credentials:true,
//     origin:'http://localhost:5174/',
// }));


// //XeUxj5fAUdpBhso9

//  mongoose.connect(process.env.MONGO_URL);

// app.get('/test',(req,res)=>{
//     res.json('test ok')
// });

// app.post('/register', async (req,res)=>{

//     const {name, prenom,adress,email, password,tel}=req.body;


//     try{

//         const userDoc = await User.create({
//             name,
//             prenom,
//             adress,
//             email,
//              password:bcrypt.hashSync(password,bcryptSalt),
//              tel,
//         }) ;
//         res.json(userDoc);
//     }catch(er){
//         res.status(422).json(er);

//     }



   
// })

// app.post('/login', async(req, res)=>{

//     const {email, password}= req.body;
//   const userDoc= await User.findOne({email});

//   if(userDoc){
//     res.json('found')
//   }else{
//     res.json(' not found')
//   }
// })
// app.listen(5000);