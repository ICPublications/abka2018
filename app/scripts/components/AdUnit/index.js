import React from 'react';

export class AdUnit extends React.Component{
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    chooseAd(){
        let adChoice = this.getRandomInt(this.props.adsArray.length);
        console.log(adChoice)
        return this.props.adsArray[adChoice];
    }
        
    render(){
        return(
                <div id='div-gpt-ad-1559579830998-0' style={{ 'width': '100%', 'height':'auto', 'maxWidth':'728px', 'margin':'0 0 100px 0', 'marginLeft': 'auto', 'marginRight' : 'auto' }}>
                    <a target="_blank" href={this.chooseAd().link}>
                        <img src={this.chooseAd().img} style={{ 'width': '100%', 'height':'auto', 'maxWidth':'728px'}}  />
                    </a>
                    
                </div>
        )
    }
        
}

module.exports = AdUnit;