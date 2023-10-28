import { faDiagramSuccessor } from "@fortawesome/free-solid-svg-icons"
import { useState, useRef, useEffect, useContext } from "react"
import AuthContext from './context/AuthProvider'
import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css'


import axios from './api/axios'
const LOGIN_URL = '/auth'






const Login = () => {
    const { setAuth } = useContext(AuthContext)
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(JSON.stringify(response?.data))
            const accessToken = response?.data?.accessToken
            const roles = response?.data?.roles
            setAuth({ user, pwd, roles, accessToken })
            setUser('')
            setPwd('')
            setSuccess(true)

        } catch (err) {
            if (!err.response) {
                setErrMsg("No Server Response")
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username pr Password')
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login Failed')
            }
            errRef.current.focus()
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section className="section">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form className="form" onSubmit={handleSubmit}>
                    <h1 className="sign">Sign In</h1>
                        <label className="user" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label className="pwd" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button className="signbtn">Sign In</button>

                        <p>
                            <span className="line">
                                {/* Put router link here */}
                                <button className="redbtn"><Link to='/Register'>Need an Account?</Link></button>
                            </span>
                        </p>
                    </form>
                </section>
            )}</>
    )
}
export default Login