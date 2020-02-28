import React from 'react';
import NavItem from './NavItem/index.js';
import logoLight from 'images/logo-light.png';

export class Navbar extends React.Component{
    componentDidMount(){
        window.addEventListener('scroll', function(e){
            if(window.scrollY==0){
                $("#navbar").fadeOut("slow");
            }else{
                $("#navbar").fadeIn("slow");
            }
        });        
    }

    handleClick(i, event) {
        event.preventDefault();
        document.querySelector(i).scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
    render(){
        return(
            <nav id="navbar" style={{minHeight:this.props.height, backgroundColor:this.props.bgColor, color:'white', borderBottom:'0'}} className="navbar navbar-default navbar-fixed-top">
                <div className="container" style={{height:this.props.height}}>
                    <div className="navbar-header" style={{height:this.props.height}}>
                        <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle vertical-center">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="#landing-section" style={{height:'100%'}} className="navbar-brand" onClick={this.handleClick.bind(this, '#landing-section')}><img style={{height:'100%'}} src={logoLight} className="img-responsive" /></a>
                    </div>
                    <div id="navbarCollapse" className="collapse navbar-collapse" >
                        <ul className="nav navbar-nav navbar-right" style={{lineHeight:this.props.height}}>
                            {this.props.children}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

module.exports = Navbar;