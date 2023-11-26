import "./Login.css"

const Login  = () => {

    const localData =  localStorage.getItem("theme")

    return (
        <main className="login">
            <section className={`boxform ${localData == "light" ? "formday" : "formnight"}`}>
                <h2 className="logname">Welcome back!</h2>
                <form className="formsection">
                    <input className={`${localData == "light" ? "inputday" : "inputnight"}`} type="text" placeholder="Username"/>
                    <input className={`${localData == "light" ? "inputday" : "inputnight"}`} type="password" placeholder="Password" />
                    <button className={`formbtn ${localData == "light" ? "btnday" : "btnnight"}`}>Log in</button>
                </form>
                <article className="orsect"><div className="line"></div><span className="ortext">or</span>
                <div className="line"></div></article>
                <p className="regline">Don´t have an account yet? <a className="linked" href="#null">Sign up!</a></p>
            </section>
        </main>
    )
}

export default Login