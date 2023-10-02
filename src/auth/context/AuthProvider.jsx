import { useState } from 'react'
import { AuthContext } from './AuthContext';

export const AuthProvider = ({children}) => {

    const [page,setPage] = useState('createAccount');

    return (
        <AuthContext.Provider value={{page,setPage}}>
            {children}
        </AuthContext.Provider>
    )
}
