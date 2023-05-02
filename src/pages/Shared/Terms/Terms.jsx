import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio molestias sit corporis eligendi quae fugiat eum repudiandae harum accusantium dolores, corrupti beatae error sequi animi saepe maxime necessitatibus amet dolore.</p>
            <p>Go back to  <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;