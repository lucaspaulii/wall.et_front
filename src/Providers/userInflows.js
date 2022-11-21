import React, { useState } from "react";

export const UserInflows = React.createContext({});

export const UserInflowsProvider = (props) => {
    const [userInflows, setUserInflows] = useState(undefined)
    return (
        <UserInflowsContext.Provider value={{userInflows, setUserInflows}}>
            {props.children}
        </UserInflowsContext.Provider>
    )
}