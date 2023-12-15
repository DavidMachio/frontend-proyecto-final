import "./Login.css"
import { useState, useContext, useRef } from "react"

import API from "./../../API/API"
import { UserContext } from "../../context/userContext"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const navigate = useNavigate()
    

    const [registerPage, setRegisterPage] = useState(false)

    const [cargando, setCargando] =useState(false)



    const Setpage = () => {
        setRegisterPage(!registerPage)
    }
    const localData = localStorage.getItem("theme")

    //aqui empiezo funciones de login
    const { login } = useContext(UserContext)
    const { saveUserData } = useContext(UserContext)

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const avatarRef = useRef(null)
    const nombreRef = useRef(null)
    const emailRef = useRef(null)


    const handleSubmit = (ev) => {
        setCargando(true)
        ev.preventDefault();
        const us = usernameRef.current.value
        const pass = passwordRef.current.value

        const body = new FormData()
        body.append('username', usernameRef.current.value)
        body.append('password', passwordRef.current.value)
        if (registerPage == true) {
            body.append('avatar', avatarRef.current.files[0])
            body.append("nombre", nombreRef.current.value)
            body.append("email", emailRef.current.value)
        }

        if (registerPage == false) {
            API.post('/usuario/login', body).then((res) => {
                
            
                login(
                    {
                        bloqueado: res.data.bloqueado,
                        username: res.data.username,
                        avatar: res.data.avatar,
                        imgcover: res.data.imgcover,
                        id: res.data.id,
                        nombre: res.data.nombre,
                        email: res.data.email,
                        rol: res.data.rol,
                        about: res.data.about,
                        favoritos: res.data.favoritos,
                    },
                    res.data.token,
                )
                
                API.get(`/usuario/${res.data.id}`).then((res) => {
                    console.log("llega aqui")
                    saveUserData(res)
                    navigate("/profile")
                }).catch((error) => {
                    setCargando(false)
                    alert(error)
                })
            }).catch((error) => {
                setCargando(false)
                alert("Incorrect Password")
            });
        } else {
            API.post("/usuario", body, {
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then(() => {
                const loginBody = new FormData()

                loginBody.append("username", us)
                loginBody.append("password", pass)

                API.post("/usuario/login", loginBody).then((res) => {
                    login(
                        {
                            bloqueado: res.data.bloqueado,
                            username: res.data.username,
                            avatar: res.data.avatar,
                            imgcover: res.data.imgcover,
                            id: res.data.id,
                            nombre: res.data.nombre,
                            email: res.data.email,
                            rol: res.data.rol,
                            about: res.data.about,
                            favoritos: res.data.favoritos,
                        },
                        res.data.token,
                    )

                    API.get(`/usuario/${res.data.id}`).then((res) => {
                        saveUserData(res)
                        navigate("/profile")
                    })
                }).catch((error) => {
                    setCargando(false)
                    alert(error)
                })
            }).catch((error) => {
                setCargando(false)
                alert(error)
            })
        }




    }

    return (
        <main className="forms">
            {registerPage == false ? (
                <section className={`boxform formday formnight`}>
                    {cargando == false ?
                    <>
                    <h2 className="logname">Welcome back!</h2>
                    <form className="formsection" onSubmit={handleSubmit}>
                        <input className={`inputday inputnight`} type="text" placeholder="Username" id="username" minLength={4} required ref={usernameRef} />
                        <input className={`inputday inputnight`} type="password" placeholder="Password" id="password" minLength={8} required ref={passwordRef} />
                        <button className={`formbtn btnday btnnight`} type="submit" >Log in</button>
                    </form>
                    <article className="orsect"><div className={`line linenight`}></div><span className="ortext">or</span>
                        <div className={`line linenight`}></div></article>
                    <p className="regline">Don´t have an account yet?</p><span onClick={Setpage} className="linked"  >Sign up!</span>
                    </>
                    :
                    <div className="container-gif">
                        <img className="gif" src="/gif_caravana.gif" />
                    </div>
                    }
                    
                </section>)
                :
                (<section className={`boxform formday formnight`}>
                    {cargando == false ?
                    <>
                    <h2 className="regname">Create your account!</h2>
                    <form className="formsection" onSubmit={handleSubmit} >
                        <input className={`inputday inputnight`} type="text" placeholder="name" minLength={5} ref={nombreRef} />
                        <input className={`inputday inputnight`} type="text" placeholder="Username" minLength={5} ref={usernameRef} />
                        <input className={`inputday inputnight`} type="email" placeholder="example@example.com" title="Please provide only a ONCE corporate email address" required ref={emailRef} />
                        <label htmlFor="avatar" className={`inputday inputnight`}>
                            Profile picture
                        </label>
                        <input type="file" id="avatar" className="inputfile" ref={avatarRef} />
                        <input className={`inputday inputnight`} type="password" placeholder="Password" required ref={passwordRef} />
                        <button className={`formbtn btnday btnnight`} type="submit" >Register</button>
                    </form>
                    <article className="orsect"><div className={`line linenight`}></div><span className="ortext">or</span>
                        <div className={`line linenight`}></div></article>
                    <p className="regline">You have an account ?</p>
                    <span onClick={Setpage} className="linked" >Login up!</span>
                    </>
                    :
                    <div className="container-gif">
                        <img className="gif" src="/gif_caravana.gif" />
                    </div>
                    }
                    
                </section>)
            }
        </main>
    )
}

export default Login

/**
 * const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const avatarRef = useRef(null);
    const nombreRef = useRef(null)
    const emailRef = useRef(null)
 */