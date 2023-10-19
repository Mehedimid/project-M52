import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

function useAuth() {
    
    return useContext(AuthContext)
}

export default useAuth;