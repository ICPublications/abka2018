import React from 'react';

export class Judge extends React.Component{

    componentDidMount(){
        var maxHeightH4 = 0;

        $(".thumbnail-judge h4").each(function(){
        if ($(this).height() > maxHeightH4) { maxHeightH4 = $(this).height(); }
        });

        $(".thumbnail-judge h4").height(maxHeightH4);

        var maxHeightH5 = 0;

        $(".thumbnail-judge h5").each(function(){
        if ($(this).height() > maxHeightH5) { maxHeightH5 = $(this).height(); }
        });

        $(".thumbnail-judge h5").height(maxHeightH5);
    }

    render(){
        return(
            <div className="thumbnail-judge col-xs-6 col-md-2" >
                <div>
                    <img className="img-responsive" src={this.props.img} />
                </div>

                    <h4>{this.props.name}</h4>
                    <h5>{this.props.position}</h5>
                    <p style={{display:'none'}}>{this.props.bio}</p>

            </div>
        )
    }
}

module.exports = Judge;
