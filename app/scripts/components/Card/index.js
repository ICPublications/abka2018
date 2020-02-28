import React from 'react';

class Card extends React.Component{
    render(){
        return(
            <div className="card col-xs-6 col-md-3">
                <img src={this.props.thumbnailURL} className="card-img-top img-responsive" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{this.props.articleTitle}</h4>
                    <p className="card-text">{this.props.articleExcerpt}</p>
                    <a target="_blank" href={this.props.linkURL}>Read More </a>
                </div>
            </div>
        )   
    }
}

module.exports = Card;