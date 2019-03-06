import React from 'react';
import $ from 'jquery';
import download from 'images/forms.png';

export class ScrollingDownload extends React.Component{
    componentDidMount(){
        $(document).ready(function(){
            //$("<style type='text/css'> .scrolledBelow{ position:absolute; top:" + ( $('.categoriesholder').offset().top -80 ) + "px } </style>").appendTo("head");
            $("<style type='text/css'> .scrolledBelow{ position:absolute; top:" + ( $('.categoriesholder').offset().top -80 ) + "px } </style>").appendTo("head");
            $('.downloadentry').css('width', $('#scrollholder').width() - 30);

            $(window).resize(function(){
                $('.downloadentry').css('width', $('#scrollholder').width() - 30);
            })

            var boxScrollTop = $('.categoriesholder').offset().top;
            var marginChange =0;
            $(window).on( 'scroll', function(){
                
                        if(window.scrollY > ( $('.categoriesholder').offset().top - $('#navbar').height() - 100 ) && window.scrollY < ( $('.categoriesholder').height()+ $('.categoriesholder').offset().top - $('#navbar').height() - 300) ){
                            $('.downloadentry').addClass('scrolling');
                            $('.downloadentry').removeClass('scrolledBelow');
                        }else{
                            $('.downloadentry').removeClass('scrolling');
                            $('.downloadentry').removeClass('scrolledBelow');
                            if(window.scrollY > ( $('.categoriesholder').height()+ $('.categoriesholder').offset().top - $('#navbar').height() - 300)){
                                $('.downloadentry').addClass('scrolledBelow');
                                
                            }
                        }
                    
                    /*
                    var st = $(this).scrollTop();
                    //boxScrollTop = $('.categoriesholder').scrollTop();
                marginChange = (st - boxScrollTop) + $('.downloadentry').height();
               // alert('st:' + st); 
                //alert('boxScrollTop:' + boxScrollTop );
                if(window.scrollY > ( $('.categoriesholder').offset().top - $('#navbar').height() - 100 ) && window.scrollY < ( $('.categoriesholder').height()+ $('.categoriesholder').offset().top - $('#navbar').height() - 300) ){
                    
                   // if (st > lastScrollTop){(
                    
                       $('.downloadentry').css('margin-top', marginChange +'px')
                   // } else {
                       // upscroll code
                  //  }
                    lastScrollTop = st; 
                } */
             });
        })
    }

    render(){
        return(
            <a target="_blank" href="https://icpublications.formstack.com/forms/african_banker_awards_2018">
                <div className="downloadentry">
                    <p>Click Here for Entry Form</p>
                    
                </div>
            </a>
        )
    }
}

module.exports = ScrollingDownload;