import React from 'react';

import {InstaIcon, FacebIcon, TwitIcon} from './Icons';

function Footer() {
  return (
    <div className='footer' style={{position: "fixed", bottom: 0, left: 0, right: 0}}>
        <div></div>
    <div className='footer1'>
       <p>&copy; EldeeWears 2023 All rights reserved</p>
    </div>
    <div className='footer2'>
       <div id='footericons'>
       <a href="https://www.facebook.com/profile.php?id=100083006035285" target="_blank" rel="noopener noreferrer"><FacebIcon/></a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><TwitIcon/></a>
          <a href="https://www.instagram.com/eldeefoods" target="_blank" rel="noopener noreferrer"><InstaIcon/></a>
       </div>
    </div>
    </div>
  )
}

export default Footer;