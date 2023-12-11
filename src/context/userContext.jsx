import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
    const navigate = useNavigate()

    const [user, setUser] = useState(() => {
        const actualUser = localStorage.getItem("user")
        const parsedUser = JSON.parse(actualUser)
        return parsedUser || null
    })

    const [userData, setUserData] = useState(() => {
        const actualUserData = localStorage.getItem("userData") 
        const parsedUserData = JSON.parse(actualUserData)
        return parsedUserData || null
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
    }

    const saveUserData = (dataUser) => {
        localStorage.setItem("userData", JSON.stringify(dataUser))
        setUserData(dataUser)
    }

    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(null)
        setToken(null)
        navigate("/")
    }

    return (
        <UserContext.Provider value={{ user, userData, token, login, logout, saveUserData }}>
            {children}
        </UserContext.Provider>
    )
}