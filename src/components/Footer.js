import React from 'react';
import { IconButton } from '@material-ui/core';
import {FaFacebookF, FaInstagram, FaLine,FaGithub} from 'react-icons/fa';

function Footer(){
    return(
        <div style={{height:'17vh',display:'flex',flexDirection:'row' ,justifyContent:'center',alignItems:'center' }}>
            <IconButton href={'https://web.facebook.com/gn.green.96/'}><FaFacebookF size={15} color="#003D6B"/></IconButton>
            <IconButton href={'https://www.instagram.com/midoriz_/'}><FaInstagram size={15} color="#003D6B"/></IconButton>
            <IconButton href={'https://github.com/supawadee0789'}><FaGithub size={15} color="#003D6B"/></IconButton>


           
        </div>
    );
}
export default Footer;