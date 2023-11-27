import "./Login.css"
import { useState } from "react"

const Login  = () => {

    const [registerPage, setRegisterPage] = useState(false)
    const Setpage = () => {
        setRegisterPage(!registerPage)
    }
    
    const localData =  localStorage.getItem("theme")

    return (
        <main className="forms">
            {registerPage == false ? (
                <section className={`boxform ${localData == "light" ? "formday" : "formnight"}`}>
                <h2 className="logname">Welcome back!</h2>
                <form className="formsection">
                    <input className={`${localData == "light" ? "inputday" : "inputnight"}`} type="text" placeholder="Username"/>
                    <input className={`${localData == "light" ? "inputday" : "inputnight"}`} type="password" placeholder="Password" />
                    <button className={`formbtn ${localData == "light" ? "btnday" : "btnnight"}`}>Log in</button>
                </form>
                <article className="orsect"><div className={`${localData == "light" ? "line" : "linenight"}`}></div><span className="ortext">or</span>
                <div className={`${localData == "light" ? "line" : "linenight"}`}></div></article>
                <p className="regline">Don´t have an account yet?</p><span onClick={Setpage} className="linked"  >Sign up!</span>
            </section>) 
            : 
            (<section className={`boxform ${localData == "light" ? "formday" : "formnight"}`}>
                <h2 className="regname">Create your account!</h2>
                <form  className="formsection">
                <input className={`${localData == "light" ? "inputday" : "inputnight"}`} type="text" placeholder="name" minLength={5}/>
                <input className={`${localData == "light" ? "inputday" : "inputnight"}`} type="text" placeholder="Username" minLength={5}/>
                <input className={`${localData == "light" ? "inputday" : "inputnight"}`} type="email" placeholder="example@once.com" pattern=".+@once\.com" title="Please provide only a ONCE corporate email address" required/>
                <label htmlFor="avatar" className={`${localData == "light" ? "inputday" : "inputnight"}`}>
                    Profile picture
                </label>
                <input type="file" id="avatar" className="inputfile" />
                <input className={`${localData == "light" ? "inputday" : "inputnight"}`} type="password" placeholder="Password" required />
                <button className={`formbtn ${localData == "light" ? "btnday" : "btnnight"}`}>Register</button>
                </form>
                <span onClick={Setpage} className="linked" >Sign up!</span>
            </section>)
            }
        </main>
    )
}

export default Login