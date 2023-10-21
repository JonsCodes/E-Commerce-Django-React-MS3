import { useState } from "react"





const Login = (props) => {
   
  
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefualt()
        console.log(email)
    }

    return (
        <div className="auth-form-container">
       
            <form clasName="login-form" onSubmit={handleSubmit}>
                    <label htmlfor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.vaule)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlfor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="*******" id="passwoed" name="password" />
                    <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
       </div>
    )
}
export default Login