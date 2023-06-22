import React, { createContext, useState } from 'react'

/**
 * 1. Create Context
 * 2. Create Provider
 * 3. Provider Context
 * 4. Pass Value in value Prop
 * 5. Render children under provider (NOTE: we get children from props)
 * 6. Wrap around app
 * 7. useContext in need basis
 */

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (payload) => {
        /**
         * 1. fetch user details from database using email and password
         * 2. if user exists, set user to the returned user from server
         */
        console.log({ login: payload });
    }

    const signup = async (payload) => {
        /**
         * 1. make a post request to server with data
         *  - { name, email, password }
         * 2. redirect user to login
         */
        console.log({ signup: payload });
    }

    const values = {
        user,
        login,
        signup
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider