import React from 'react';

export class SingleSponsor extends React.Component{
    getClasses(){
        if(this.props.typeClass!='companycarousel'){
            return 'col-centered col-xs-4 col-md-2'
        }
    }

    render(){
        return(
            <div className={`singlesponsor ${this.getClasses()}` }>
                <p>{this.props.sponsorCat}</p>
                <a target="_blank" href={this.props.companyURL}>    
                    <img src={this.props.companyLogoURL} className="img-responsive" />
                </a>
            </div>
        )
    }
}

module.exports = SingleSponsor;