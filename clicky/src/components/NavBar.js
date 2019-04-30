import React from "react";

const style = {
  bgDark: {
    backgroundColor: `rgb(1,0,1)`,
    position: `fixed`,
    top: 0,
  }
}

const NavBar = props => (
  <header style={style.bgDark} className=" w-100 ph3 pv3 pv2-ns ph4-m ph5-l tc">
    <nav className="f6 fw6 ttu tracked">
      <p className="link dim white dib mr3" >{props.status}</p>
      <p className="link dim white dib mr3" title="Store">Score: {props.currentScore}</p>
      <p className="link dim white dib" title="Contact">Top Score: {props.topScore}</p>
    </nav>
  </header>
)

export default NavBar;