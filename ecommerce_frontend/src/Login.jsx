import { useState } from "react"



const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = () => {
        
    }

    return (
       <form>
            <label for="email">email</label>
            <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label for="password">Password</label>
            <input value={pass} type="password" placeholder="*******" id="passwoed" name="password" />
            <button>Log In</button>
       </form>
    )
}
export default Login