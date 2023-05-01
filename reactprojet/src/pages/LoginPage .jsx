import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {


    const history =useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');  
    const [tel,setTel] = useState('');

    async function handleLoginSubmit(ev){
        ev.preventDefault();
        try{

            await axios.post('http://localhost:8000/',
            {nom,prenom,adress,email, password,tel})

        .then(res=>{
            if(res.data="exist"){

                history("./pages/AcountPage",{state:{id:email}})
            }else if(res.data=" not exist"){

               alert("de7se ")
            }
        })
            .catch(ev=>{
                alert("worming detals")
                console.log(ev)
            })
                     
            
            
       

        }catch(ev){
        console.log(ev);


        }
      

    }
    return (
        <div className= "mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center md-4" >Login</h1>
                <form className="max-w-md mx-auto"  onSubmit={handleLoginSubmit} >
                
                 
                
                    <input type="text" placeholder="youremail.com " value={email} onChange={(ev)=>{
                        setEmail(ev.target.value)
                    }}  className="border" />
                    <input type="text" placeholder="password" value={password}   onChange={(ev)=>{
                        setPassword(ev.target.value)
                    }} className="border" />
                     
                    <button className="primary"  onClick={handleLoginSubmit}> login</button>


                    <div className="text-center py-2 text-gray-500">don't have acount yet?
                        <Link  className="underline text " to={'/register'}>Register now
                        </Link>

                    </div>
                </form>
            </div>

        </div>
    )
}