// const mongoose =require("mongoose");
// mongoose.connect("mongodb://localhost:27017/krily")
// .then(()=>{
//     console.log("mangob coonectd")
// })
// .catch(()=>{
//     console.log("mangob  not coonectd") 
// })

// const newSchema= new mongoose.Schema({
//     nom:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true
//     },
//     adress:{
//         type:String,
//         required:true
//     },
//     prenom:{
//         type:String,
//         required:true
//     },
    
//     password:{
//         type:String,
//         required:true},
//         tel:{
//             type:String,
//             required:true
//         }
    

// })
// const collection = mongoose.model("collection",newSchema)
// module.exports = collection