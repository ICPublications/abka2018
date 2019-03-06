import React from 'react';
import OwlCarousel from 'components/OwlCarousel/index.js';

export class PhotoCarousel extends React.Component{
    getCarouselOptions(){
        var carouselOptions = {    
            center:true,
            margin:0,
            autoplay: true,
            autoplaySpeed: 4000,
            loop: true,
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
            <div id="photocarousel">
                <OwlCarousel carouselNo='1' carouselOptions={this.getCarouselOptions()}>
                    <img src='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/02/27453759777_05be043cc8_z.jpg' />
                    <img src='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/02/40516256390_90f995cf60_z.jpg' />
                    <img src='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/02/41379148955_b9af7f1b90_z-1.jpg' />
                    <img src='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/02/41600657864_a82454982c_z.jpg' />
                    <img src='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/02/41379149495_4da11df434_z-1.jpg' />
                    <img src='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/02/41600656634_86dcddbe41_z.jpg' />
                    <img src='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/02/41379149365_4273253090_z.jpg' />
                </OwlCarousel>
            </div>
        )
    }
    
}

module.exports = PhotoCarousel;