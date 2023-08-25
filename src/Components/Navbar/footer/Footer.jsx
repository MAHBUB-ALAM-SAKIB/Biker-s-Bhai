import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import "./Footer.css"
import { colors } from '@mui/material';

function Footer() {
  return (
    <div className='footer'>
        <div className="socialmedia svg ">
         <InstagramIcon style={{fontSize:50}}/>
         <FacebookIcon style={{fontSize:50}}/>
         <TwitterIcon style={{fontSize:50}}/>
         <WhatsAppIcon style={{fontSize:50}}/>
        </div>
        <p> &copy;2023 Biker's Bhai.com </p>
    </div>
  )
}

export default Footer