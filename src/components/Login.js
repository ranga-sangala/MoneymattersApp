import React,{useState} from 'react'
import Cookies from 'js-cookie'


const Login = () => {
      const [email,setEmail] = useState('')
      const [password,setPassword] = useState('')
      

     function onSubmitSuccess(jwt_token) {
           localStorage.setItem("TOKEN",jwt_token)
           window.location.href= '/dashboard'
     }
     
     const onSubmitFailure = () => {

     }
      
      async function onSubmitForm(event) {
        
           const userDetails = {email,password};
           const url = ("https://bursting-gelding-24.hasura.app/api/rest/get-user-id")
           const options = {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify(userDetails)
           }
           const response = await fetch(url,options);
           const data = await response.json();
           if(response.ok === true){
              onSubmitSuccess(data.jwt_token)
           } else{
            onSubmitFailure(data.error_msg)
           }
      }
      
       

  return (
    <div class="login-container d-flex justify-content-center">
        <form onSubmit={(event) =>{
            onSubmitForm()
        }}>
            <div>  
                <input className='form-control w-100' type='email' value={email} onChange={(e) =>{
                         setEmail(e.target.value)
                }}/>
            </div>
            <div>
                <input className='form-control w-100' type='password' value={password} onChange={(e) =>{
                       setPassword(e.target.value)
                }} />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login
