import React,{useState} from 'react'



const Login = () => {
      const [email,setEmail] = useState()
      const [password,setPassword] = useState()
      
      async function onSubmitForm() {

           
           try {
            const userDetails = {email,password};
           const url = ("https://bursting-gelding-24.hasura.app/api/rest/get-user-id")
           const options = {
            method:"PUT",
            body:JSON.stringify(userDetails)
           }
           const response = await fetch(url,options);
           const data = await response.json();
           console.log(data)
            
           } catch (error) {
            console.log(error.msg)
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
