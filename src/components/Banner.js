import React from 'react';

const style = {
  logoIcon: {
    width: 900,
    heigth: 400
  },
}

const Banner = props => (
  <article className="mw7 center ph3 ph5-ns tc br2 pv3 animated fadeIn marginNeeded">
    <img style={style.logoIcon} className='logoIcon' src="./img/crashBanner.png" alt="crash"/>
  </article>
  
);
export default Banner;