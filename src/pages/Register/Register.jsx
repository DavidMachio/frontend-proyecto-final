import "./Register.css"

import { useContext, useRef } from "react"

import API from "../../API/API"
import { UserContext } from "../../context/userContext"

const Register = () => {

    const {login} = useContext(UserContext)

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const avatarRef = useRef(null)

    const handleSubmit = (ev) => {
        ev.preventDefault()
        const body = new FormData()
        body.append("username",usernameRef.current.value)
        body.append("password",passwordRef.current.value)
        body.append("avatar", avatarRef.current.files[0])

        API.post("/usuario", body, {
            headers: { "Content-Type": "multipart/form-data"},
        }).then(() => {
            const loginBody = new FormData()
            loginBody.append("username", usernameRef.current.value)
            loginBody.append("password", passwordRef.current.value)

            API.post("/usuario/login", loginBody).then((res) => {
                login({
                    username: res.data.username,
                    avatar: res.data.avatar,
                },
                res.data.token,
                )
            })
        })
    }

    return(
        <main className="register">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name"/>
                <label htmlFor="mail">mail</label>
                <input type="email" id="mail"/>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" minLength={3} required ref={usernameRef} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" minLength={8} required ref={passwordRef} />
                <label htmlFor="avatar" className="upload">Avatar⤴</label>
                <input type="file" id="avatar" ref={avatarRef} />
                <button type="submit">Register</button>
            </form>
        </main>
    )
}

export default Register