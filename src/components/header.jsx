import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container top-bar">
                <div className="left-heading">
                    <h1>COVID-19 <span className="txt-primary">India</span></h1>
                </div>
                <div className="right-heading">
                    UNOFFICIAL
                </div>
            </div>
        );
    }
}
 
export default Header;
