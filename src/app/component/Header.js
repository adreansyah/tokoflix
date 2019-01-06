import React from 'react'; 

class Header extends React.Component {
    constructor(){
        super();
        this.state = {};
        this.linkTo       = this.linkTo.bind(this); 
    }

    linkTo(){
        let {history} = this.props;
        history.push('/');        
    }

     render() {
        return (
            <header>      
                <nav className ="navbar navbar-fixed-top bg-black">
                <div className="container">
                    <div className="navbar-header pull-left">
                        <a onClick={this.linkTo} className="cursor navbar-brand font-head">Toko <i className="fa fa-video-camera text-aqua"></i> Flix</a>
                    </div>
                    <div className="navbar-custom-menu pull-right">
                        <ul className="nav navbar-nav">
                            <li className="cursor">
                                <a className="cursor user user-menu font-acc">
                                Adreansyah <i className="fa fa-caret-down" aria-hidden="true"></i>
                                </a>
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
