import React from 'react';

export class PreviousWinners extends React.Component{
    componentDidMount(){
        $(document).ready(function(){
            $('.winner-title').on('click', function(){

                $('.winner-title span').fadeIn();
                if($(this).parent().children('.winner-content').css('display')!='block'){
                    $('.winner-content').slideUp();
                    $(this).children('span').fadeOut();
                    $(this).parent().children('.winner-content').slideDown();
                }
            })
        })
    }
    render(){
        return(
        <div id="yea">
            <div className="year-row row initial">
                <h4 className="winner-title">-<span>&#x25b8; 2018 ABKA Winners</span></h4>
                <div className="winner-content">
                    <div className="year col-xs-12 col-md-4">
                        <h3>2019</h3>
                    </div>
                    <div className="winnersbyyear col-xs-12 col-md-8">
                        <div className="col-xs-6">
                            <h4>African Bank of the Year</h4>
                            <h5>Afreximbank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker of the Year</h4>
                            <h5>Admassu Tadesse – Trade and Development Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Central Bank Governor of the Year</h4>
                            <h5>Tarek Amer, Central Bank Governor, Egypt</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Regional Bank of The Year (East Africa)</h4>
                            <h5>KCB, Kenya</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Regional Bank of The Year (West Africa)</h4>
                            <h5>Orabank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Regional Bank of The Year (North Africa)</h4>
                            <h5>Banque de l’Habitat (Tunisia)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Regional Bank of The Year (Southern Africa)</h4>
                            <h5>Mauritius Commercial Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Regional Bank of The Year (Central Africa)</h4>
                            <h5>BGFI, Gabon</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Award for Innovation in Financial Services</h4>
                            <h5>KCB - Kenya</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Special Commendation</h4>
                            <h5>JUMO, South Africa</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Lifetime Achievment Award</h4>
                            <h5>Sizwe Nxasana, former CEO, First Rand Group</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Finance Minister of the Year*</h4>
                            <h5>Romuald Wadagni, République du Benin</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker Icon*</h4>
                            <h5>Mitchell Elegbe, Founder, Interswitch</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Infrastructure Deal of the Year</h4>
                            <h5>Mozambique Floating LNG - TDB & Credit Agricole</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year - Debt</h4>
                            <h5>Rothschild – $2.2bn Republic of Senegal Dual-Currency Eurobond</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year - Equity</h4>
                            <h5>Vivo IPO - Standard Bank & Rand Merchant Bank (South Africa)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Award for Financial Inclusion</h4>
                            <h5>Bank of Industry – Nigeria</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Special Commendation for their contribution to the development and financing of the Rural Sector</h4>
                            <h5>Banco Nacional de Guinea Ecuatorial (BANGE)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Socially Responsible Bank of the Year</h4>
                            <h5>Equity Bank – Kenya</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>SME Bank of the Year</h4>
                            <h5>Equity Bank – Kenya</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Energy Project of the Year</h4>
                            <h5>Equity Bank – Kenya</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Agri Deal of the Year</h4>
                            <h5>Equity Bank – Kenya</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="year-row row">
                <h4 className="winner-title">-<span>&#x25b8; 2018 ABKA Winners</span></h4>
                <div className="winner-content">
                    <div className="year col-xs-12 col-md-4">
                        <h3>2018</h3>
                    </div>
                    <div className="winnersbyyear col-xs-12 col-md-8">
                        <div className="col-xs-6">
                            <h4>African Bank of the Year</h4>
                            <h5>Equity Group Holdings Plc, Kenya</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker of the Year</h4>
                            <h5>James Mwangi, Equity Group Holdings Plc, Kenya</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Central Bank Governor of the Year</h4>
                            <h5>Dr Benno Ndulu</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Socially Responsible Bank of the Year</h4>
                            <h5>BMCE Bank of Africa Group</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year Ð Equity</h4>
                            <h5>Steinhof Africa Retail Listing – Rand Merchant Bank (South Africa)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year Ð Debt</h4>
                            <h5>$300m Diaspora Bond, Nigeria - Standard Bank / FBNQuest Merchant Bank (Nigeria) </h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Infrastructure Deal of the Year</h4>
                            <h5>Nacala Railway and Port Corridor - Standard Bank / Rand Merchant Bank (South Africa)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Award for Financial Inclusion</h4>
                            <h5>Groupe Crédit Agricole (Morocco)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker Icon</h4>
                            <h5>Waheed A. Olagunju, Bank of Industry</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Finance Minister of the Year</h4>
                            <h5>Amadou Ba (Senegal)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Lifetime Achievement Award</h4>
                            <h5>Stephen Koseff, co-founder Investec</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Innovation in Banking</h4>
                            <h5>Ecobank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Retail Bank in Africa</h4>
                            <h5>Ecobank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in North Africa</h4>
                            <h5>CIB, Egypt</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in West Africa</h4>
                            <h5>BDM (Mali)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Central Africa</h4>
                            <h5>BGFI, Gabon</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in East Africa</h4>
                            <h5>CRDB (Tanzania)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Southern Africa</h4>
                            <h5>State Bank Mauritius (SBM)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Investment Bank of the Year</h4>
                            <h5>Standard Bank</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="year-row row">
                <h4 className="winner-title">-<span>&#x25b8; 2017 ABKA Winners</span></h4>
                <div className="winner-content">
                    <div className="year col-xs-12 col-md-4">
                        <h3>2017</h3>
                    </div>
                    <div className="winnersbyyear col-xs-12 col-md-8">
                        <div className="col-xs-6">
                            <h4>African Bank of the Year</h4>
                            <h5>GT Bank Group</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker of the Year</h4>
                            <h5>Guaranty Trust Bank (Nigeria)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Central Bank Governor of the Year</h4>
                            <h5>Rameswurlall Basant Roi (Mauritius)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Socially Responsible Bank of the Year</h4>
                            <h5>Groupe Crédit Agricole (Morocco)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year Ð Equity</h4>
                            <h5>OGP sale to Helios (Argentil)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year Ð Debt</h4>
                            <h5>Helios Towers, $600m debut High Yield Offering (Standard Bank)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Infrastructure Deal of the Year</h4>
                            <h5>AFC and Harith Asset Merger (Africa Finance Corporation)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Lifetime Achievement Award</h4>
                            <h5>Citi</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Innovation in Banking</h4>
                            <h5>Ecobank – MasterCard</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Retail Bank in Africa</h4>
                            <h5>Equity Bank (Kenya)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in North Africa</h4>
                            <h5>Attijariwafa Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in West Africa</h4>
                            <h5>Orabank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Central Africa</h4>
                            <h5>Trust Merchant Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in East Africa</h4>
                            <h5>KCB Bank</h5>
                        </div>
                        

                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Southern Africa</h4>
                            <h5>Mauritius Commercial Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Investment Bank of the Year</h4>
                            <h5>Rand Merchant Bank (South Africa)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Central Bank Governor of the Year</h4>
                            <h5>Rameswurlall Basant Roi (Mauritius)</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="year-row row">
                <h4 className="winner-title">-<span>&#x25b8; 2016 ABKA Winners</span></h4>
                <div className="winner-content">
                    <div className="year col-xs-12 col-md-4">
                        <h3>2016</h3>
                    </div>
                    <div className="winnersbyyear col-xs-12 col-md-8">
                        <div className="col-xs-6">
                            <h4>African Bank of the Year</h4>
                            <h5>Attijiriwafa Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker of the Year</h4>
                            <h5>Segun Agbaje</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Socially Responsible Bank of the Year</h4>
                            <h5>Commercial International Bank (CIB)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Award for Financial Inclusion</h4>
                            <h5>Ecobank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year Ð Equity</h4>
                            <h5>Naspers $2.5bn Accelerated Equity Offering (Citi)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year Ð Debt</h4>
                            <h5>CameroonÕs Currency Swap (Lazard)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Infrastructure Deal of the Year</h4>
                            <h5>Azura-Edo IPP</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker Icon</h4>
                            <h5>Daniel Matjila</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Finance Minister of the Year</h4>
                            <h5>Alamine Ousmane Mey</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Lifetime Achievement Award</h4>
                            <h5>Paul Fokam</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Innovation in Banking</h4>
                            <h5>Guaranty Trust Bank</h5>
                        </div>
                        

                        <div className="col-xs-6">
                            <h4>Best Retail Bank in Africa</h4>
                            <h5>BCI Mozambique</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Finance Minister Best Regional Bank in North Africa</h4>
                            <h5>Commercial International Bank (CIB)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in West Africa</h4>
                            <h5>Atlantic Business International</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Central Africa</h4>
                            <h5>BGFI</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in East Africa</h4>
                            <h5>CRDB Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Southern Africa</h4>
                            <h5>MCB</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Investment Bank of the Year</h4>
                            <h5>Rand Merchant Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Central Bank Governor of the Year</h4>
                            <h5>Patrick Njoroge</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="year-row row">
                <h4 className="winner-title">-<span>&#x25b8; 2015 ABKA Winners</span></h4>
                <div className="winner-content">
                    <div className="year col-xs-12 col-md-4">
                        <h3>2015</h3>
                    </div>
                    <div className="winnersbyyear col-xs-12 col-md-8">
                        <div className="col-xs-6">
                            <h4>African Bank of the Year</h4>
                            <h5>Banque Populaire</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker of the Year</h4>
                            <h5>Albert Essien - Ecobank Transnational Incorporated</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Socially Responsible Bank of the Year</h4>
                            <h5>BMCE BANK</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Investment Bank of the Year</h4>
                            <h5>Rand Merchant Bank, a division of FirstRand Bank Limited</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Award for Financial Inclusion</h4>
                            <h5>Fondation Attawfiq Micro-Finance</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Retail Bank in Africa</h4>
                            <h5>Standard Bank Group Limited</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year - Debt</h4>
                            <h5>Credit Suisse AG, London Branch</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year - Equity</h4>
                            <h5>Standard Advisory London Limited</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Infrastructure Deal of the Year</h4>
                            <h5>Africa Finance Corporation (AFC)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Trade Finance Deal of the Year</h4>
                            <h5>Commercial International Bank (Egypt) S.A.E</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Bank of the Year</h4>
                            <h5>Attijiriwafa Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Lifetime Achievement Award</h4>
                            <h5>Jim Ovia - Zenith Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Finance Minister of the Year</h4>
                            <h5>Hon. Claver Gatete</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Central Bank Governor of the Year</h4>
                            <h5>Prof. Njuguna Ndung'u</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank: West Africa</h4>
                            <h5>Orabank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank: North Africa</h4>
                            <h5>Attijiriwafa Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank: Southern Africa</h4>
                            <h5>Banco de Comercio e Investimentos</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank: East Africa</h4>
                            <h5>Bank of Kigali</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank: Central Africa</h4>
                            <h5>Groupe BGFIBank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Central Bank Governor of the Year</h4>
                            <h5>Prof. Njuguna Ndung'u</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Award for Innovation in Banking</h4>
                            <h5>BIM – Banco Internacional de Moçambique (Millennium bim)</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="year-row row">
                <h4 className="winner-title">-<span>&#x25b8; 2014 ABKA Winners</span></h4>
                <div className="winner-content">
                    <div className="year col-xs-12 col-md-4">
                        <h3>2014</h3>
                    </div>
                    <div className="winnersbyyear col-xs-12 col-md-8">
                        <div className="col-xs-6">
                            <h4>African Bank of the Year</h4>
                            <h5>GTBank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker of the Year</h4>
                            <h5>Vivienne Yeda - East African Development Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Socially Responsible Bank of the Year</h4>
                            <h5>Nedbank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Islamic Finance Initiative</h4>
                            <h5>Banque Islamique de Mauritanie</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year- Equity</h4>
                            <h5>CitiGroup Global Markets</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year- Debt</h4>
                            <h5>Standard Chartered Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Fund of the Year</h4>
                            <h5>Investec Asset Management</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Award for financial Inclusion</h4>
                            <h5>Mastercard</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Award for Innovation in Banking</h4>
                            <h5>Nedbank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Mortgage Bank of the Year</h4>
                            <h5>Nigerian Mortgage Refinance Company</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Investment Bank of the Year</h4>
                            <h5>Rand Merchant Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Africa: Southern Africa</h4>
                            <h5>Stanbic IBTC Bank Plc</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Retail Bank in Africa</h4>
                            <h5>State Bank Mauritius</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Lifetime Achievement Award</h4>
                            <h5>Elizabeth Mary Okelo</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Central Bank Governor of the Year</h4>
                            <h5>HE Linah Mohohlo</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Special Recognition Award</h4>
                            <h5>HE President Paul Kagame</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Finance Minister of the Year </h4>
                            <h5>Hon Armando Manuel</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Africa : West Africa</h4>
                            <h5>Ecobank Mali</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Africa : North Africa</h4>
                            <h5>Banque Centrale Populaire</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Africa: Southern Africa</h4>
                            <h5>Stanbic IBTC Bank Plc</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Africa : East Africa</h4>
                            <h5>Bank of Kigali</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Africa : Central Africa</h4>
                            <h5>Trust Merchant Bank</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="year-row row">
                <h4 className="winner-title">-<span>&#x25b8; 2013 ABKA Winners</span></h4>
                <div className="winner-content">
                    <div className="year col-xs-12 col-md-4">
                        <h3>2013</h3>
                    </div>
                    <div className="winnersbyyear col-xs-12 col-md-8">
                        <div className="col-xs-6">
                            <h4>African Bank of the Year</h4>
                            <h5>Attijiriwafa Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker of the Year</h4>
                            <h5>Joao Figueiredo - Banco Unico</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Award for Financial Inclusion</h4>
                            <h5>Africa Garanty Fund</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Retail Bank in Africa</h4>
                            <h5>Banque Populaire</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year</h4>
                            <h5>CFC Stanbic & Fieldstone</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Private Equity Fund of the Year</h4>
                            <h5>Citadel Capital</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Award for Innovation in Banking</h4>
                            <h5>Ecobank Transnational Togo</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Islamic Finance Initiative</h4>
                            <h5>Gulf African Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Socially Responsible Bank of the Year</h4>
                            <h5>Nedbank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Investment Bank of the Year</h4>
                            <h5>Rand Merchant Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Fixed Income Deal of the Year</h4>
                            <h5>Standard Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker Icon</h4>
                            <h5>Michael Joseph</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="year-row row">
                <h4 className="winner-title">-<span>&#x25b8; 2012 ABKA Winners</span></h4>
                <div className="winner-content">
                    <div className="year col-xs-12 col-md-4">
                        <h3>2012</h3>
                    </div>
                    <div className="winnersbyyear col-xs-12 col-md-8">
                        <div className="col-xs-6">
                            <h4>African Bank of the Year</h4>
                            <h5>Ecobank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker of the Year</h4>
                            <h5>Olusegun Agbaje - Guaranty Trust Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Investment Fund/Private Equity Fund of the Year</h4>
                            <h5>Citadel Capital</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Socially Responsible Bank of the Year</h4>
                            <h5>BMCE Bank Group</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Retail Bank in Africa</h4>
                            <h5>Coris Bank International</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Award for Innovation in Banking</h4>
                            <h5>Equity Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker Icon</h4>
                            <h5>Dr Eleni Gabre-Mahdin - Ethiopia Commodities Exchange</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Award for financial Inclusion</h4>
                            <h5>Groupe Banque Populaire</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Investment Bank of the Year</h4>
                            <h5>Renaissance Capital</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year</h4>
                            <h5>Standard Bank Group</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Bond Deal</h4>
                            <h5>Standard Chartered Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Lifetime Achievement Award</h4>
                            <h5>Arnold Ekpe</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Finance Minister of the Year </h4>
                            <h5>HE Kerfalla Yansané</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Central Bank Governor of the Year</h4>
                            <h5>HE Mustapha Kamel Nabli</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Africa : West Africa</h4>
                            <h5>Access Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Africa : North Africa</h4>
                            <h5>Attijariwafa Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Africa : East Africa</h4>
                            <h5>Bank of Kigali</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Africa: Southern Africa</h4>
                            <h5>BCI</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Regional Bank in Africa : Central Africa</h4>
                            <h5>BGFI</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="year-row row">
                <h4 className="winner-title">-<span>&#x25b8; 2011 ABKA Winners</span></h4>
                <div className="winner-content">
                    <div className="year col-xs-12 col-md-4">
                        <h3>2011</h3>
                    </div>
                    <div className="winnersbyyear col-xs-12 col-md-8">
                        <div className="col-xs-6">
                            <h4>African Bank of the Year</h4>
                            <h5>Standard Bank Group</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker of the Year</h4>
                            <h5>Equity</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Investment Fund/Private Equity Fund of the Year</h4>
                            <h5>Actis</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Microfinance Institution/Project of the Year </h4>
                            <h5>EB-Accion Savings & Loans Company</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Investment Bank of the Year</h4>
                            <h5>EFG-Hermes</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Most Innovative Bank of the Year</h4>
                            <h5>FirstBank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Local Bank in Africa</h4>
                            <h5>Millennium BIM</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Socially Responsible Bank of the Year</h4>
                            <h5>National bank of Egypt</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year</h4>
                            <h5>Stanbic IBTC Bank Plc</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker Icon</h4>
                            <h5>Adebayo Ogunlesi</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Lifetime Achievement Award</h4>
                            <h5>Evelyn Oputu</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Central Bank Governor of the Year</h4>
                            <h5>HE Emmanuel Tumusiime-Mutebile - Governor of the Bank of Uganda</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Finance Minister of the Year </h4>
                            <h5>HE Situmbeko Musokotwane</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="year-row row">
                <h4 className="winner-title">-<span>&#x25b8; 2010 ABKA Winners</span></h4>
                <div className="winner-content">
                    <div className="year col-xs-12 col-md-4">
                        <h3>2010</h3>
                    </div>
                    <div className="winnersbyyear col-xs-12 col-md-8">
                        <div className="col-xs-6">
                            <h4>African Bank of the Year</h4>
                            <h5>Attijiriwafa Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker of the Year</h4>
                            <h5>Dr. James Mwangi - Equity</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Socially Responsible Bank of the Year</h4>
                            <h5>Access Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Investment Fund/Private Equity Fund of the Year</h4>
                            <h5>Actis</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year</h4>
                            <h5>African Finance Corporation</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Microfinance Institution of the Year</h4>
                            <h5>Amhara Credit and Saving Institution (ACSI)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Local Bank in Africa</h4>
                            <h5>Banque Internationale Arabe Tunise (BIAT)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Development Bank of the year</h4>
                            <h5>Development Bank of Southern Africa (DBSA)</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Most Innovative Bank of the Year </h4>
                            <h5>Ecobank-Nedbank Alliance</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Investment Bank of the Year</h4>
                            <h5>Renaissance Capital</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Stanbic IBTC Bank Plc</h4>
                            <h5>Attijiriwafa Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Global Bank of the Year</h4>
                            <h5>Standard Chartered Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Finance Minister of the Year </h4>
                            <h5>Syda Bbumba</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="year-row row">
                <h4 className="winner-title">-<span>&#x25b8; 2009 ABKA Winners</span></h4>
                <div className="winner-content">
                    <div className="year col-xs-12 col-md-4">
                        <h3>2009</h3>
                    </div>
                    <div className="winnersbyyear col-xs-12 col-md-8">
                        <div className="col-xs-6">
                            <h4>African Bank of the Year</h4>
                            <h5>Ecobank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>African Banker of the Year</h4>
                            <h5>GTB</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Most Innovative Bank of the Year</h4>
                            <h5>Absa</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Development Bank of the year</h4>
                            <h5>African Development Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Best Global Bank of the Year </h4>
                            <h5>Barclays</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Investment Fund/Private Equity Fund of the Year</h4>
                            <h5>Citadel</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Microfinance Institution of the Year</h4>
                            <h5>Equity</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Local Bank</h4>
                            <h5>NBC</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>SCR</h4>
                            <h5>Nedbank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Deal of the Year</h4>
                            <h5>Nedbank Capital</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Central Bank Governor of the Year</h4>
                            <h5>Tito Mboweni - Reserve Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Investment Bank of the Year</h4>
                            <h5>Standard Bank</h5>
                        </div>
                        <div className="col-xs-6">
                            <h4>Finance Minister of the Year</h4>
                            <h5>Dr. Youssef Bourtos-Ghali</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

module.exports = PreviousWinners;