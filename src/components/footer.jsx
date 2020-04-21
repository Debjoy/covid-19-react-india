import React, { Component } from 'react';
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footer-content">
                <p className="lead">Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local public health agency.</p>
                <a href="https://www.mohfw.gov.in/" target="_blank" rel="noopener noreferrer"><button className="butn mohw">Get latest information from MoHFW <i className="fas fa-external-link-square-alt"></i></button></a>
                <p className="lead unofficial-text">This is an unofficial website for tracking COVID 19 cases in India. This website was made using data from the original crowd sourced website linked below.</p>
                <a href="https://www.covid19india.org/" target="_blank" rel="noopener noreferrer"><button className="butn covid19india">covid19india.org <i className="fas fa-external-link-square-alt"></i></button></a>
                <h4 className="contact-title">Get in touch</h4>
                <a href="https://www.facebook.com/debjoy.bhowal.5" ><button className="butn social-media facebook"><i className="fab fa-facebook"></i></button></a>
                <a href="https://github.com/debjoy"><button className="butn social-media github"><i className="fab fa-github"></i></button></a>
                <a href="https://www.linkedin.com/in/debjoy-bhowal/" ><button className="butn social-media linkedin"><i className="fab fa-linkedin-in"></i></button></a>
                <a href="mailto:debjoybhowal7@gmail.com" ><button className="butn social-media mail"><i className="fas fa-envelope"></i></button></a>
                <p className="social-link "><a href="mailto:debjoybhowal7@gmail.com" >debjoybhowal7@gmail.com</a></p>
                <p className="social-link "><a href="https://atdebjoy.com/portfolio" >My Portfolio <i className="fas fa-briefcase"></i></a></p>
                <p className="social-link "><a href="https://github.com/Debjoy/covid-19-react-india" >just fork it <i className="fas fa-code-branch"></i></a></p>
                
                <p className="social-link simple">Made with <i className="fas fa-heart link-heart"></i> by<a href="https://atdebjoy.com" > Debjoy </a></p>
            </div>
         );
    }
}
 
export default Footer;