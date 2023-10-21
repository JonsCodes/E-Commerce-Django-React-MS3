import { useState } from "react"



const Register = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setNanme] = useState('')

    const handleSubmit = (e) => {
        e.preventDefualt()
        console.log(email)
    }

    return (
        <div className="auth-form-container">
            <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Fullname</label>
                    <input value={name} name="name" id="name" placeholder="full name"></input>
                    <label htmlfor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.vaule)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlfor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="*******" id="passwoed" name="password" />
                    <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
       </div>
    )
}

export default Register