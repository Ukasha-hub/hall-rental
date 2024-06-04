"use client"
import React, { createContext } from 'react';

export const AuthContext=createContext(null)
const UserInfo = () => {

    
    
const AuthInfo={user, loading, setLoading, createUser, logOut, signIn}
    return (
        <div>

        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
            
        </div>
    );
};

export default UserInfo;