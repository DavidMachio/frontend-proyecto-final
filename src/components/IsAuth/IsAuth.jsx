import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "../../context/userContext";

export const IsAuth = ({ children }) => {
    const { user, userData } = useContext(UserContext)

    if(user !== null) {
        return children
    } else {
        return <Navigate to="/login" />
    }
    
}
export const Isadmin = ({ children }) => {
    const { user } = useContext(UserContext)

    if(user !== null && user.rol == "admin") {
        return children
    } else {
        return <Navigate to="/" />
    }
    
}

