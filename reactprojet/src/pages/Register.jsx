import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import AcountPager from "./AcountPage";


export default function Register() {
    const history =useNavigate();
    const [nom,setnom]=useState('');
    const [prenom,setPrenom] = useState('');
    const [adress,setAdress] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');  
    const [tel,setTel] = useState('');

   async function registerUser(ev){
        ev.preventDefault( );

        try{
            await axios.post('http://localhost:8080/register',{
                nom,
                prenom,
                adress,
                email,
                password,
                tel,
    
            }
            
            );
            alret('Registration Successful. Now you can log in ')

            .then(res=>{
                if(res.data="exist"){
                    alert("mewjoude   ")
                    
                }else if(res.data=" not exist"){
                    history("./pages/AcountPage",{state:{id:email}})
                   
                }
            })
                .catch(ev=>{
                    alert("worming detals")
                    console.log(ev)
                })
                     
        }catch(ev){

            alert(ev)

        }
      
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center md-4">Register</h1>
                <form className="max-w-md mx-auto  " onSubmit={registerUser} action="POST">
                <input type="text" placeholder="nom" value={nom} onChange={(ev)=>{
                    setnom(ev.target.value)
                }} className="border" />
                 <input type="text" placeholder="prenom"  value={prenom}  onChange={(ev)=>{
                    setPrenom(ev.target.value)
                }} className="border" />
                 <input type="text" placeholder="adress"  value={adress}  onChange={(ev)=>{
                    setAdress(ev.target.value)
                }} className="border" />
                    <input type="text" placeholder="youremail.com " value={email}  onChange={(ev)=>{
                    setEmail(ev.target.value)
                }} className="border" />
                    <input type="password" placeholder="password"  value={password}  onChange={(ev)=>{
                    setPassword(ev.target.value)
                }} className="border" />
                 <input type="text" placeholder="tel"  value={tel}  onChange={(ev)=>{
                    setTel(ev.target.value)
                }} className="border" />
                    <button className="primary"  onClick={registerUser}> Register</button>
                    <div className="text-center py-2 text-gray-500">Already a member
                        <Link className="underline text " to={'/login'}>login
                        </Link>

                    </div>
                </form>
            </div>

        </div>
    )
}