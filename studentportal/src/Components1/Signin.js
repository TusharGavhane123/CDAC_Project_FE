import './Style.css';
import { useState } from 'react';
import axios from 'axios';
import { link, useNavigate } from "react-router-dom";

function Signin(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
     
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

   const handleApi =() =>{
        if(password.length < 5)
          document.getElementById('passErrorMsg').innerHTML = "password should be more than 5 "
        if(password.length > 15)
          document.getElementById('passErrorMsg').innerHTML = "password should be less than 15 "
        console.log({email,password})
        axios.post('https://reqres.in/api/login',
        {
            email : email,
            password : password
        })
        .then(result =>{
               console.log(result.data)
               alert('success')
              // sessionStorage.setItem(userName , result.data.name)
               
               
               navigate('/student')})
               .catch(error => {
                alert('service error')
                console.log(error)
               })
            
        }
        return(
            <div className="container-fluid">
            <div className="row justify-content-around align-items-center" style={{height :"98vh"}}>
                    <div className="col-4 p-5 shadow">
                                   
                                  
                                   
                                   <h3 className="head">Login</h3>
                                   <div className="ui form">
                                      <div className="field">
                                   <label>Email Address</label>
                                  <div className="mb-3">
                                         <input type="email" name="email" className="form-control" placeholder="Enter Email" onChange={handleEmail} value= {email} required/>
                                         <div id="emailErrorMsg"></div>
                                  </div>
                                 
                                      </div>
                                      <div className="field">
                                  <label>Password</label>
                                  <div className="mb-3">
                                         <input type="password" name="pass" className="form-control" placeholder="Enter Password" onChange={handlePassword} value={password} required/>
                                  </div>
                                         <div id="passErrorMsg"></div>
                                  </div>
                                
                                  
                                  <div className="mb-3 py-3" style={{textAlign:"center"}}>
                                         <button className="btn btn-primary form-control" onClick={handleApi}>Sign in</button>
                                  </div>
                                  </div>
                                  
                              
                    </div>
                   
            </div>
     </div>
     )
            
   }

   export default Signin;
  
