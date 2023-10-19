import React from 'react';
import dragon from '../assets/logo.png';
import moment from 'moment';

function Header(props) {
    return (
        <div className=' pt-10 flex flex-col gap-3'>
            <div className='flex justify-center'><img src={dragon} className='mb-5 w-2/5' /></div>
            <h1 className='text-2xl text-center '>Journalism Without Fear or Favour</h1>
            <h1 className='text-2xl text-center '>{moment().format("dddd, MMMM D, YYYY")}</h1>
        </div>
    );
}

export default Header;