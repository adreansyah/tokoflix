import React from 'react'; 

class Header extends React.Component {
  render() {
    return (
        <header>      
            <nav className ="navbar navbar-fixed-top bg-black">
            <div className="container">
                <div className="navbar-header">
                <a className="cursor navbar-brand font-head">Toko <i className="fa fa-video-camera text-aqua"></i> Flix</a>
                </div>
                <div className="navbar-custom-menu pull-right">
                <ul className="nav navbar-nav">
                    <li className="cursor">
                    <a className="cursor user user-menu font-acc">Sign In</a>
                    </li>
                    <li className="cursor">
                    <a className="cursor user user-menu font-acc">Register</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>
    )
  }
}

export default Header; 
