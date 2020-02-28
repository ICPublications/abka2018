import React from 'react';
import Flags from './Flags/index.js'

export class SingleCategory extends React.Component{
    getEngFlag(engLink){
        if(engLink!=''){
            return(
                <Flags langCode='en' flagLink={this.props.engLink}></Flags>
            )
        }else{
            return '';
        }
    }
    getFrFlag(frLink){
        if(frLink!=''){
            return(
                <Flags langCode='fr' flagLink={this.props.frLink}></Flags>
            )
        }else{
            return '';
        }
    }
    getForms(){
        var forms = this.getEngFlagLink + this.getFrFlagLink;
        if(forms==''){
            return '';
        }else{
            var english = this.getEngFlagLink;
            var french = this.getFrFlagLink;

            return(
                <p>Download Forms:
                    {english}
                    {french}
                </p>
            );
        }
    }
    render(){
        return(
            <div className="singlecategory">
                <h4>{this.props.categoryName}</h4>
                <h5 style={{display:'none'}}>2019 Winner: <span>{this.props.lastYearsWinner}</span></h5>
                {this.getEngFlag(this.props.engLink)}
                {this.getFrFlag(this.props.frLink)}
                <p>
                    {this.props.description}
                </p>
            </div>
        )
    }
}

module.exports = SingleCategory;