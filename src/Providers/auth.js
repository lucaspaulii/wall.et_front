import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [userInfo, setUserInfo] = useState(undefined)
    return (
        <AuthContext.Provider value={{userInfo, setUserInfo}}>
            {props.children}
        </AuthContext.Provider>
    )
}