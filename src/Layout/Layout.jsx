import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <div className='sizing'>
            <Outlet></Outlet>
        </div>
    );
}

export default Layout;