import "./Login.css"

const Login  = () => {
    return (
        <main className="Login">
            <section className="boxform">
                <div className="logname">Log in</div>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" />
                    <label htmlFor="password">Password</label>
                    <input type="password"  />
                    <button>Log in</button>
                </form>
            </section>
        </main>
    )
}

export default Login