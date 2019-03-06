import React from 'react';
import Sections from '../index.js';
import OwlCarousel from 'components/OwlCarousel/index.js';
import SingleSponsor from 'components/SponsorsByCategory/SingleSponsor/index.js'

export class CompanyCarousel extends React.Component{
    getSponsors(){
        return this.props.logoArray.map((sponsor) => <SingleSponsor typeClass='companycarousel' key={'compCarousel'+ sponsor.postID} companyURL={sponsor.companyURL} companyLogoURL={sponsor.companyLogoURL}></SingleSponsor>);
    }

    getCarouselOptions(){
        var carouselOptions = {   
            startPosition: 2,
            loop: false,
            center:true,
            margin:50,
            autoplay: true,
            autoplaySpeed: 4000,
            nav: false,
            dots:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        }
        return carouselOptions;
    }

    render(){
        return(
            <Sections id={this.props.id} typeClass="companycarousel" containerType="container">
                {this.props.children}
                <OwlCarousel carouselNo='2' carouselOptions={this.getCarouselOptions()}>
                    {this.getSponsors()}
                </OwlCarousel>
            </Sections>
        )
    }
}

module.exports = CompanyCarousel;