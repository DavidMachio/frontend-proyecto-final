import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()

export const UserContextProvider = ({ children}) => {
    const navigate = useNavigate()

    const [user, setUser] = useState(() => {
        const actualUser = localStorage.getItem("user")
        const parsedUser = JSON.parse(actualUser)
        return parsedUser || null
    })

    const [token, setToken] = useState(() => {
        const actualToken = localStorage.getItem("token")
        return actualToken || null
    })

    const login = (APIuser, APItoken) => {
        localStorage.setItem("user", JSON.stringify(APIuser))
        localStorage.setItem("token", APItoken)
        setUser(APIuser)
        setToken(APItoken)
        navigate("/")
    }

    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(null)
        setToken(null)
        navigate("/")
    }

    return (
        <UserContext.Provider value={{user, token, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}