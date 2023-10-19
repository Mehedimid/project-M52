import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

function Latest(props) {
    return (
        <div className='bg-pink-100 flex items-center p-5 my-7'>
            <button className="px-4 py-2 bg-red-600 text-white text-xl mr-2">LATEST</button>
            <div>
                <Marquee speed={100}>
                   <div  className='flex gap-10 text-lg'>
                   <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Link>
                     <Link>ut obcaecati sit neque natus optio at magnam voluptatibus dicta ad odio cumque possimus molestiae!</Link>
                   </div>
                </Marquee>
            </div>
        </div>
    );
}

export default Latest;