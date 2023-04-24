import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle />Login with Google</Button>{' '}
            <Button variant="outline-secondary"><FaGithub />Login with Github</Button>{' '}
            <div>
                <h4 className='mt-4 mb-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='text-primary me-2'></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='text-primary me-2 '></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='text-danger me-2'></FaInstagram>Instagram</ListGroup.Item>
                 
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg}alt="" />
            </div>
        </div>
    );
};

export default RightNav;