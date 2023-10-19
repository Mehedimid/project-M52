import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function LeftNavbar(props) {
    const [categrories, setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <>
            <div className=''>
                <h1 className="text-xl font-semibold mb-4 ">All Categories</h1>
            {
                categrories.map(category => <NavLink key={category.id} className='block font-medium ml-3 text-slate-500 text-xl mt-2' to={`categrories/${category.id}`}>{category.name}</NavLink>)
            }
            </div>
        </>
    );
}

export default LeftNavbar;