import React from 'react';
import Card from '../../card/index.js';
import axios from 'axios';

export class ArticleSection extends React.Component{
    getArticles(){
        const response = axios.get('https://africanbusinessmagazine.com/wp-json/wp/v2/posts?filter[cat]=143')
        alert(this.getArticles())
        return(
            {
                posts: response.data
            })
    }
    render(){
        return(
            <div>
                <h2 style={{marginBottom: '30px'}}>African Banker Magazine Articles</h2>
                <div className="row articlerow">
                    {
                    //<</div>Card thumbnailURL='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/06/brochure.jpg' linkURL='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/06/ABKA-Brochure-2019_290519.pdf' articleTitle='Download the ABKA 2019 Brochure' articleExcerpt='Click on the below link to download the ABKA 2019 Brochure'></Card>

                    }
                    <Card thumbnailURL='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/06/Untitled-2.jpg' linkURL='https://africanbusinessmagazine.com/african-banker/winners-announced-for-african-banker-awards-2019-les-gagnants-pour-les-trophees-african-banker-2019/' articleTitle='Winners Announced for African Banker Awards 2019 | Les gagnants pour les Trophées African Banker 2019' articleExcerpt='Call for more inclusion at this year’s African Banker Awards '></Card>
                    <Card thumbnailURL='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/06/Screenshot-2019-06-07-at-14.11.28.png' linkURL='https://africanbusinessmagazine.com/african-banker/olukayode-pitan-managing-director-bank-of-industry/' articleTitle='Interview: Olukayode Pitan, managing director of Bank of Industry' articleExcerpt='The Bank of Industry is Nigeria’s oldest and largest development bank.…'></Card>
                    <Card thumbnailURL='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/06/Screenshot-2019-06-07-at-14.07.15.png' linkURL='https://africanbusinessmagazine.com/african-banker/in-conversation-abu-jimoh-ceo-coronation-merchant-bank/' articleTitle='In conversation: Abu Jimoh, CEO, Coronation Merchant Bank' articleExcerpt='What is Coronation’s vision? Do you aspire to be more than an investment bank?'></Card>
                    <Card thumbnailURL='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/06/Untitled-1.jpg' linkURL='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/06/Felix-Bikpo.jpg' articleTitle='Interview: Felix Bikpo, Group CEO, African Guarantee Fund' articleExcerpt='Despite the great enthusiasm and energy of their proprietors, small and medium-sized enterprises constantly find it difficult if not impossible to obtain finance to develop or expand their businesses.…'></Card>
                </div>
                <div className="row articlerow" style={{display: 'none'}}>
                    <Card thumbnailURL='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/05/Screenshot-2019-05-30-at-09.33.06-300x170.png' linkURL='https://africanbusinessmagazine.com/sectors/technology/shaping-africas-economic-strategy-for-the-digital-age/' articleTitle='Shaping Africa digital' articleExcerpt='Hello'></Card>
                    <Card thumbnailURL='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/05/Screenshot-2019-05-30-at-09.33.06-300x170.png' linkURL='https://africanbusinessmagazine.com/sectors/technology/shaping-africas-economic-strategy-for-the-digital-age/' articleTitle='Shaping Africa digital' articleExcerpt='Hello'></Card>
                    <Card thumbnailURL='https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/05/Screenshot-2019-05-30-at-09.33.06-300x170.png' linkURL='https://africanbusinessmagazine.com/sectors/technology/shaping-africas-economic-strategy-for-the-digital-age/' articleTitle='Shaping Africa digital' articleExcerpt='Hello'></Card>
                </div>

                <div>
                    <a target="_blank" href="https://africanbusinessmagazine.com/category/african-banker/"><h3>See more ABKA articles here ></h3></a>
                </div>
            </div>   
        )
    }
}

module.exports = ArticleSection;