import React from 'react';
import ReactDOM from 'react-dom';
// import style from 'css/main.css';
//import Sections from 'components/Sections/index.js';
import bootstrap from 'bootstrap-loader';
import Landing from 'components/Sections/Landing/index.js'
import style from 'sass/main.scss';
import landingcornerpiece from 'images/landingcornerpiece.png';
import logo from 'images/logo.png';
import CompanyCarousel from 'components/Sections/CompanyCarousel/index.js';
import PhotoCarousel from 'components/Sections/PhotoCarousel/index.js';
import SplitSection from 'components/Sections/SplitSection/index.js';
import SplitSectionText from 'components/Sections/SplitSection/text.js';
import SplitSectionImage from 'components/Sections/SplitSection/image.js';
import SplitSectionEmpty from 'components/Sections/SplitSection/empty.js';
import SSI from 'images/ssi.jpg';
import Judge from 'components/Judge/index.js';
import SponsorsByCategory from 'components/SponsorsByCategory/index.js';
import Sections from 'components/Sections/index.js';
import FeedBox from 'components/FeedBox/index.js';
import ContactBox from 'components/ContactBox/index.js';
import SingleCategory from 'components/SingleCategory/index.js';
import ScheduleItem from 'components/ScheduleItem/index.js';
import SSI2 from 'images/0_Equatorial-Guinea.jpg';
import mapPlaceholder from 'images/mappace.png';
import Navbar from 'components/Navbar/index.js';
import NavItem from 'components/Navbar/NavItem/index.js';
import ScrollingDownload from 'components/ScrollingDownload/index.js';
import PreviousWinners from 'components/PreviousWinners/index.js';
import favicon from 'images/favicon.ico';

const categoriesArray = 
[
    {categoryName:'African Bank of the Year', lastYearsWinner:'Equity Group Holdings Plc, Kenya', engLink: 'https://icpublications.formstack.com/forms/african_bank_of_the_year_2018', frLink: '', postID:'1', description: 'This award goes to the bank in Africa that has demonstrated a high performance across various metrics. It will have considerably changed the banking landscape by reaching out to new customers, offering new services, adopting inclusiveness by bringing the unbanked into the banking space, making use of new technologies, and helping to drive growth through a stronger financial sector'}, 
    {categoryName:'African Banker of the Year', lastYearsWinner:'James Mwangi, Equity Group Holdings Plc, Kenya', engLink: 'https://icpublications.formstack.com/forms/african_banker_of_the_year_2018', frLink: '', postID:'12121', description: 'Through their leadership and vision, the winner will have overseen strong financial performance within their organisation and will have successfully guided their institution to new heights in the industry.'}, 
    {categoryName:'Central Bank Governor of the Year', lastYearsWinner:'Dr Benno Ndulu', engLink: '', frLink: '', postID:'21121', description: ' This award goes to the central bank governor who has successfully reformed and transformed the financial sector, through proper regulation and policies, as well as created a stable and predictable environment for investment and growth.'}, 
    {categoryName:'Investment Bank of the Year', lastYearsWinner:'Standard Bank', engLink: 'https://icpublications.formstack.com/forms/investment_bank_of_the_year_2018', frLink: '', postID:'21211', description: 'The winner will have changed the landscape of investment banking and finance by encouraging and increasing deal and transaction flow in the continent, and by delivering pioneering solutions for investors and African clients alike.'},
    {categoryName:'Best Regional Bank in Africa*', lastYearsWinner:'Attijariwafa Bank - Maroc', engLink: 'https://icpublications.formstack.com/forms/best_regional_bank_2018', frLink: '', postID:'21212', description: 'This award goes to a bank operating either across a specific region or in one country within a region (North, East, South, West or Central Africa). The winner will have excelled in the banking industry in its region by reaching out to new customers, offering new services, adopting inclusiveness by bringing the unbanked into the banking space, making use of new technologies and contributing to a stronger financial sector.'},
    {categoryName:'Best Retail Bank in Africa', lastYearsWinner:'Ecobank', engLink: 'https://icpublications.formstack.com/forms/best_retail_bank_in_africa_2018', frLink: '', postID:'21213', description: 'The winner of this category will have expanded its retail services through new products, new facilities, and a wider consumer network, and improved access to financial services, particularly savings and checking accounts, mortgages, personal loans, and debit or credit cards. The bank’s application should demonstrate strong corporate governance and its wider corporate social policy impact on the community it serves.'},
    {categoryName:'Innovation in Banking', lastYearsWinner:'Ecobank', engLink: 'https://icpublications.formstack.com/forms/award_for_innovation_in_banking_2018', frLink: '', postID:'21214', description: 'This award goes to the African bank that has demonstrated original and practical uses of technology to provide customer convenience, improved and more affordable services, and greater access to the financial services industry in Africa.'},
    {categoryName:'Lifetime Achievement Award*', lastYearsWinner:'Stephen Koseff, co-founder Investec', engLink: '', frLink: '', postID:'21215', description: 'This award goes to an African banker who throughout his or her career has worked tirelessly to strengthen and promote banking as well as the role of the financial services sector on the African continent.'},
    {categoryName:'Finance Minister of the Year*', lastYearsWinner:'Amadou Ba (Senegal)', engLink: '', frLink: '', postID:'21216', description: 'This award goes to the African minister of finance who has carried through prudent macro economic policies and, through reforms and his or her actions, has shown skill and dexterity to create the conditions of an appealing investment climate.'},
    {categoryName:'African Banker Icon*', lastYearsWinner:'Waheed A. Olagunju, Bank of Industry', engLink: '', frLink: '', postID:'21217', description: ' The ‘Icon’ category is awarded to an individual or institution for their outstanding contribution in the field of business, banking and finance. They are chosen by the awards committee, who will have noted excellence in their area of expertise and for their work in helping to change the perception of Africa as well as contributing to the establishment of best global practice in the continent. This award in the past has been given to outstanding individuals such as Dr Ngozi Okonjo-Iweala, who needs no introduction, Adebayo Ogunlesi, one of Wall Street’s most eminent financiers, and Eleni Gabre-Madhin, founder of the Ethiopian Commodities Exchange.'},
    {categoryName:'Infrastructure Deal of the Year', lastYearsWinner:'Nacala Railway and Port Corridor - Standard Bank / Rand Merchant Bank (South Africa)', engLink: 'https://icpublications.formstack.com/forms/infrastructure_deal_of_the_year_2018', frLink: '', postID:'21218', description: 'This will be awarded for the deal which has had the most significant impact. The committee will take into consideration the complexity of the deal, its size, its structure and the groundbreaking role it may have played (ie ‘replicability’). The deal may provide a template for such future transactions and will have highlighted new possibilities and new solutions within the sector or industry it relates to. '},
    {categoryName:'Deal of the Year - Debt', lastYearsWinner:'$300m Diaspora Bond, Nigeria - Standard Bank / FBNQuest Merchant Bank (Nigeria)', engLink: 'https://icpublications.formstack.com/forms/deal_of_the_year_2018_debt', frLink: '', postID:'21219', description: 'This winning deal may provide a template for such future transactions and will have highlighted new opportunities and raised country sector or regional investment profiles, or some other innovation in debt deal financing within Africa.'},
    {categoryName:'Deal of the Year - Equity', lastYearsWinner:'Steinhof Africa Retail Listing – Rand Merchant Bank (South Africa)', engLink: 'https://icpublications.formstack.com/forms/deal_of_the_year_2018_equity', frLink: '', postID:'21210', description: 'The winning deal will have highlighted new opportunities and raised sector or regional investment profiles. The judges will consider the size, complexity and impact in terms of changing perceptions of Africa as a place to do business. '},
    {categoryName:'Award for Financial Inclusion', lastYearsWinner:'Caisse Centrale de Garantie (Morocco)', engLink: 'https://icpublications.formstack.com/forms/award_for_financial_inclusion_2018', frLink: '', postID:'2121', description: 'This category has been widened to include more than just microfinance. The winner will have best succeeded in delivering financial products and services to wider parts of society, particularly to the most disadvantaged and low income segments, ultimately contributing to financial inclusion, development and growth.'},
    {categoryName:'Socially Responsible Bank of the Year', lastYearsWinner:'BMCE Bank of Africa Group', engLink: 'https://icpublications.formstack.com/forms/socially_responsible_bank_of_the_year_2018', frLink: '', postID:'21222', description: 'The panel of judges will be seeking concrete examples of projects and initiatives within the institutions that have had a sustainable impact on the communities they are geared towards. The award is aimed at companies that go beyond the philanthropic use of funds to use their overall knowledge, resources and reputation to improve the lives of the less advantaged in society.'}
];
const categoriesMatrix = categoriesArray.map((category) =>
   <SingleCategory key={category.postID} categoryName={category.categoryName} lastYearsWinner={category.lastYearsWinner} engLink={category.engLink} frLink={category.frLink} description={category.description}></SingleCategory>
);

const scheduleItemsArray = [{postID:'23232', name:'Banking in Africa: 2020', time:'9:00am - 5:00pm', desctription: 'Banking in Africa is big business etc. etc.'}, {postID:'231142', name:'Banking in Africa: 2020', time:'9:00am - 5:00pm', desctription: 'Banking in Africa is big business etc. etc.'}, {postID:'211112', name:'Banking in Africa: 2020', time:'9:00am - 5:00pm', desctription: 'Banking in Africa is big business etc. etc.'}];
const scheduleItems = scheduleItemsArray.map((scheduleItem) => 
    <ScheduleItem key={scheduleItem.postID} itemName={scheduleItem.name} itemTime={scheduleItem.time} itemDescription={scheduleItem.desctription}></ScheduleItem>
);

const judges = 
[
    /* {judgeName: 'Zemedeneh Negatu', position: 'Global Chairman of Fairfax Africa Fund, LLC (U.S.)', headshoutURL:'http://ic-events.net/wordpress/wp-content/uploads/2018/04/Alain-Le-Noir-web-2.jpg', postID:'229290', bio:'An American of Ethiopian origin, Zemedeneh has advised Wall Street investment banks, Governments, Sovereign Wealth Funds and multinational corporations in various sectors including financial services, airlines and consumer products. Zemedeneh was the founder of Ernst & Young Ethiopia and had served as its Managing Partner for 18 years. He was recently appointed the Global Chairman of the American investment firm Fairfax African Fund, LLC, based in Washington D.C. Zemedeneh is also the Chairman of the African subsidiary of one of the largest and best known European multi-national fashion design and manufacturing companies.Zemedeneh has a business degree from Howard University, Washington D.C., completed the LSE program at the Harvard Business School, Boston and is a U.S. C.P.A.'},
    {judgeName: 'Tom Minney', position: 'Editor African Capital Markets News', headshoutURL:'http://ic-events.net/wordpress/wp-content/uploads/2018/04/Alain-Le-Noir-web-1.jpg', postID:'229291', bio: 'Tom Minney has run capital markets and businesses for over 19 years in Africa and specialises in finance, business strategy and communications. His experience includes being general manager of the Namibian Stock Exchange (in a period of fast growth); a founding member of the SADC Committee of Stock Exchanges; investment banking and private equity; helping set up an innovative investment firm in Ethiopia; and working with fair trade and other companies on strategy and capital raising. He advises on capital markets strategy and is a writer, analyst, journalist and speaker. He edits the African Capital Markets News blog and writes for a range of magazines.'},
    {judgeName: 'Koosum Kalayan', position: 'Chairman EdgoMerap', headshoutURL:'http://ic-events.net/wordpress/wp-content/uploads/2018/04/koosum-web.jpg', postID:'229292', bio: 'Koosum Kalyan is Chairman of EdgoMerap Energy Services in London, as well as a non-executive director of MTN Group Ltd, Standard Bank Group, Petmin Mining, Hayleys Energy Services, and the South African Mint and Bank Note subsidiaries of the South African Reserve Bank. She currently serves on the President’s International Investment Advisory Council in Togo and previously served as Private Sector Liaison on Tony Blair’s Commission for Africa, Chair of the G8 Anti-Corruption Committee, and Advisory Council member of the CBC.'},
    {judgeName: 'Jean-Louis Ekra', position: 'Former Chairman and President, African Export-Import Bank', postID:'229293', bio: 'Mr. Jean-Louis Ekra is currently Chairman and President of the African Export-Import Bank. Mr. Ekra joined the bank in 1996 as Senior Executive Vice President. He started his banking career with Citibank, subsequently served as Partner of DKS Investment in Jersey, Country Manager for the West African Economic and Monetary Union (UEMOA) and Managing Director of the Ivorian Post Office. He currently serves as a Member of Advisory Board at Africa Investor Ltd. He was, in 2004, awarded the Chevalier de l\'Ordre National of Ivory Coast. Mr. Ekra holds an MBA from the Stern School of Business, New York and a Maîtrise en Sciences Economiques from the University of Abidjan, Côte d’Ivoire.', headshoutURL:'http://ic-events.net/wordpress/wp-content/uploads/2018/04/jean-louis-web.jpg'},
    {judgeName: 'Christopher Hartland-Peel', position: 'Principal Hartland-Peel Africa Equity Research Christopher', headshoutURL:'http://ic-events.net/wordpress/wp-content/uploads/2018/04/chriistopher-hartland-web.jpg', postID:'229294', bio: 'Hartland-Peel has worked exclusively on sub-Saharan Africa since 1990 and has maintained a database of African companies and stock markets that is one of the most comprehensive in the world. He has worked extensively in emerging markets – with the IFC in Washington DC, the AfDB and USAID, and Standard Bank and Exotix in London. In the 1990s he was based in Nairobi, working on privatisation and financial market development, where he realised there was little or no effective research done on sub-Saharan stock markets. He has written a book, African Equities: A Guide to Markets and Companies, published by Euromoney'},
    {judgeName: 'Alan Le Noir', position: 'Founder and Special Advisor to the President of the Club of the Directors of Banks and Credit Institutions in Africa', headshoutURL:'http://ic-events.net/wordpress/wp-content/uploads/2018/04/Alain-Le-Noir-web.jpg', postID:'229295', bio: 'Alain Le Noir graduated in banking and finance. After working in a French bank for 13 years he joined the Training Centre of the Banking Industry in France before relocating to Africa. In his capacity as General Delegate, he directed training courses for 25 countries in Africa and the Indian Ocean. For 20 years, he was the Executive Secretary of the Club of the Directors of Banks and Credit Institutions in Africa, which he founded in 1989. He is today the special advisor to the president of the club. Independent administrator of several banks in the franc zone, he writes regularly in the French edition of African Banker. He is co-author of the book "Banks and Finance in Africa: the actors of the emergence".' }
    */
];

const sponsors = 
[

    {sponsorName: 'afdb', sponsorCategory: 'highpatron', companyLogoURL:'https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/03/New-Project.png',companyLightLogoURL:'http://ic-events.net/wordpress/wp-content/uploads/2018/02/adf-light.png', companyURL:'https://www.afdb.org/', postID:'229291'},
    {sponsorName: 'agf', sponsorCategory: 'platinum', companyLogoURL:'https://africanbusinessmagazine.com/wordpress/wp-content/uploads/2019/02/agf-1.png',companyLightLogoURL:'http://ic-events.net/wordpress/wp-content/uploads/2018/02/adf-light.png', companyURL:'http://www.africanguaranteefund.com', postID:'229292'}

];
const sponsorTypes = 
[
    {categoryType:'highpatron', categoryName: 'High Patron', catID:'1234'},
    {categoryType:'platinum', categoryName: 'Platinum Sponsor', catID:'1235'}
]
let allSponsors = [];
const sponsorHeadings = sponsorTypes.map((sponsorType) => 

{
    let associatedSponsors=[];
    allSponsors = [];

    for (var i = 0; i<sponsors.length; i++){
        if(sponsors[i].sponsorCategory==sponsorType.categoryType){
            associatedSponsors.push(sponsors[i]);
        }
        allSponsors.push(sponsors[i]);
    }   
    return <SponsorsByCategory key={sponsorType.catID} sponsorCategoryType={sponsorType.categoryType} sponsorCategoryDisplayName={sponsorType.categoryName} sponsorArray={associatedSponsors}></SponsorsByCategory> 
});

const judgeDets = judges.map((judge) =>
{
    return <Judge key={judge.postID} name={judge.judgeName} position={judge.position} bio={judge.bio} img={judge.headshoutURL}></Judge>
});



let extraHTML = <img className="col-xs-12 col-md-4" src={landingcornerpiece} style={{position:'absolute', top:'0', right:'0', paddingRight:'0'}} />

ReactDOM.render(
    <div>
        <Navbar height='100px' bgColor='rgba(52, 52, 52, 0.8)'>
            <NavItem href="#firstsplitsection">About</NavItem>
            <NavItem href="#categories">Categories</NavItem>
            <NavItem href="#judging-section">Judging</NavItem>
            {/* <NavItem href="#programme-section">Programme</NavItem> */}
            <NavItem href="#venue-section">Venue</NavItem> 
            {/* <NavItem href="#mainsponsor-section">Sponsors</NavItem> */}
            <NavItem href="#contact-section">Contacts</NavItem>
        </Navbar>
        
        <Landing id="landing-section" template="threequarter-screen-left" extraBgElements={extraHTML}>
            <div className="col-sm-offset-2 col-md-offset-3 col-xs-12 col-sm-8 col-md-6 landingtext">
                <h1><img src={logo} className="img-responsive centeredlogo" /></h1> 
                <h2 className="brandfont">Compete. Celebrate. Network</h2>
                <h3 className="brandfont" style={{fontStyle:'italic', marginTop:'0'}}>Rewarding Banking Excellence in Africa</h3>
                <h4 style={{fontWeight:'normal', color: '#379823'}}>11th June 2019 - Malabo, Equatorial Guinea</h4>
                <hr style={{borderTop: '1px solid darkgrey'}} />
                <p>The African Banker Awards are designed to recognize the reforms, rapid modernisation, consolidation, integration and expansion of Africa’s banking and financial system.</p>
                <div className="entryinfo">
                    <p>Call for entries commenced the week on 28th February 2019. You will have to submit your entry by cob 1st April 2019, at 23.59 GMT.</p> 
                    { /* <p>Should you wish to start preparing your applications, we can confirm that all of last year's categories will be included in this year's awards. We are considering adding other categories.</p> */ }
                </div>
                <div className="landgingbuttons">
                    <a target="_blank" href="https://www.eventbrite.co.uk/e/african-banker-awards-2019-tickets-56880319567"><button className="darkgreen-btn col-xs-12 col-sm-4 col-md-4 col-sm-offset-2">Book your place</button></a>
                    <a target="_blank" href="https://icpublications.formstack.com/forms/african_banker_awards_2019? "><button className="darkgreen-btn col-xs-12 col-sm-4 col-md-4" >Submit an entry</button></a> 
                </div>

            </div>
        </Landing>
        <CompanyCarousel id="sponsorcarousel-section" logoArray={allSponsors}>
            <h4>Our Sponsors</h4>
        </CompanyCarousel>
        <SplitSection id="firstsplitsection">
            <SplitSectionText>
                <h2>Africa's Most Prestigious Banking Awards</h2>
                <img className="mobile-image img-responsive" src={SSI} />
                <p>The most prestigious event in Africa’s banking and finance sector, The African Banker Awards, is held Under the High Patronage of the African Development Bank.</p>
                <p>The annual event, which takes place during the annual meeting of the African Development Bank, highlights the achievements of companies and individuals that contribute to the transformation and development of Africa’s financial sector. </p>
            </SplitSectionText>
            <SplitSectionImage imageURL={SSI}>
            </SplitSectionImage>
        </SplitSection>
        <Sections id="about-section" typeClass="normal" containerType="container">
            <h3 className="col-xs-12" style={{float:'none'}}>
            Recognising the 400 personalities and banks that are driving Africa’s rapidly transforming financial sector, the African Banker Awards bring together industry leaders from Africa and the world. They celebrate the achievements of those who are driving growth and development and creating new economic opportunities for citizens and communities all over the continent and inspire new generations of bankers who are shaping Africa’s future.
            </h3>
            <hr />
            <div className="contactmatrix" >
                <h2 id="categories" className="col-xs-12">The Categories</h2>
                <p className="col-xs-12">Our categories highlight the achievements of companies and individuals that contribute to the transformation and development of Africa’s financial sector. They focus on areas important to the finance community and their stakeholders.  We review our categories every year to ensure the Awards remain relevant and take into account the changing realities on the ground.</p>
                {
                    //<div id="scrollholder" className="col-xs-12 col-sm-2 hidden-sm hidden-xs">
                    //    <ScrollingDownload></ScrollingDownload> 
                    //</div>
                }
                    
                <div className="categoriesholder col-xs-12 col-sm-12">
                    {categoriesMatrix}
                </div>
            </div>
        </Sections>
        <Sections id="previousevent-section" typeClass="normal" containerType="container-fluid">
            <div className="container">
                <h2>The Previous Winners</h2>

                <PreviousWinners></PreviousWinners>
            </div>
            <PhotoCarousel></PhotoCarousel>
        </Sections>
        <Sections id="judging-section" typeClass="normal" containerType="container">
            <h1>Judges</h1>
                <div className="row">
                    {judgeDets}
                </div>
                <h3 className="col-xs-12 col-md-4">The Selection and Judging Process</h3>
                <p className="col-xs-12">Following a call for entries our advisory committee shortlists nominees for each category from the pool of submissions. The committee is made up of our editorial board and experts with an in-depth knowledge of the African banking and finance sector. Our independent expert judging panel with extensive expertise across the African regions will then select the winners based on a number of specific criteria from the shortlist. The winners will be announced at the Awards ceremony. </p>  
        </Sections>
        {/*
        
        <Sections id="programme-section" typeClass="normal" containerType="container">
            <h1>Programme</h1>
            <FeedBox id="programmebox">
                <p>At this year's African Banker Awards we will be holding a variety of informative and progressive meetings, discussions and roundtables to help the progression of all attendees and stakeholders within the African Banking sector.  Please stay tuned as our programme is updated with exciting possibilities for discussions</p>
            </FeedBox>
        </Sections>
        */}

        <SplitSection id="venue-section">
            <SplitSectionImage imageURL={SSI2}></SplitSectionImage>
            <SplitSectionEmpty>
                <div id="hoteldets">
                    <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                        <h3>Malabo, Equatorial Guinea</h3>
                        <img src={mapPlaceholder} className="img-responsive" />
                        <p className="col-xs-12 col-sm-6">
                            After a jam packed and successful event last year in Korea; The African Banker Awards continues on it's movement around Asia into the beautiful city of Malabo, Equatorial Guinea. 
                        </p>
                        <p className="col-xs-12 col-sm-4" style={{fontWeight:'bold'}}>
                            
                        </p>
                    </div>
                </div>
                <div id="gmaps" style={{backgroundImage:'url('+mapPlaceholder+')', height:'50%',backgroundSize:'cover',backgroundPosition:'center center', color:'white'}}>
                    <p style={{textAlign:'center'}} className="vertical-center">Venue to be confirmed...</p>
                </div>
            </SplitSectionEmpty>
        </SplitSection>
    
        <Sections id="mainsponsor-section" typeClass="normal" containerType="container">
            {sponsorHeadings}
        </Sections>
        <Sections id="contact-section" typeClass="normal" containerType="container">
            <p>Feel free to contact us using the following email addresses:</p>
            <ContactBox contactIcon="" contactType="Sponsorships" contactEmail="events@icpublications.com"></ContactBox>
            <ContactBox contactIcon="" contactType="Event Organisation" contactEmail="awards@icpublications.com"></ContactBox>
        </Sections>
        <nav id="mobile-bottom-nav" className="visible-xs">
            <a target="_blank" href="https://www.eventbrite.co.uk/e/african-banker-awards-2018-tickets-43207317249" style={{width:'100%'}}>Book your place</a>
            <a target="_blank" href="https://icpublications.formstack.com/forms/african_banker_awards_2018" style={{display:'none'}}>Entry Form</a>
        </nav>
    </div>, 
  
    document.getElementById('app')
)