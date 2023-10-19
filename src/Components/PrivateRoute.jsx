import React from 'react';
import useAuth from './useAuth./useAuth';
import Login from './Login';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({children}) {
    const {user, loading} = useAuth()
    const location = useLocation()
    // console.log(location)


    if(loading) {
        return <h1 className="text-5xl text-center mt-10">Loading Data...</h1>
    }
    else if(user) {
        return children;
        }
    // return <Navigate state={location.pathname} to='/login'></Navigate>
    return <Login location={location}></Login>

}

export default PrivateRoute;