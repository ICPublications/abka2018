import React from 'react'

export class CurrentWinners extends React.Component{
    render(){
        return(
            <div className="col-xs-12 currentwinners" style={{'textAlign':'center'}}>
                <h2>2019 Nominees</h2>
                <hr></hr>
                <div className="container">
                    <div className="row" style={{'marginBottom':'50px'}}>
                        <div className="col-xs-12 col-md-4">
                            <h4>African Banker of the Year</h4>
                            <ul>
                                <li>Admassu Tadesse – Trade and Development Bank</li>
                                <li>Brehima Amadou Haidara – La Banque de Développement du Mali</li>
                                <li>Brian Kennedy – Nedbank, South Africa</li>
                                <li>James Mwangi – Equity Bank, Kenya</li>
                                <li>Johan Koorts – ABSA, South Africa</li>
                            </ul>


                        </div>
                        <div className="col-xs-12 col-md-4">
                            <h4>African Bank of the Year</h4>
                            <h5>Attijariwafa Bank, Morocco</h5>
                            <h5>AfreximBank</h5>
                            <h5>Ecobank (ETI)</h5>
                            <h5>Equity Group, Kenya</h5> 
                            <h5>Mauritius Commercial Bank, Mauritius</h5>
                            <h5>Trade and Development Bank</h5>
	
                            

                        </div>

                        <div className="col-xs-12 col-md-4">
                            <h4>Best Retail Bank in Africa</h4>
                            <h5>Coris – Burkina Faso</h5>
                            <h5>Ecobank (ETI)</h5>
                            <h5>Guarantee Trust Bank – Nigeria</h5>
                            <h5>KCB, Kenya</h5>
                            <h5>QNB AlAhli – Egypt</h5>
                        </div>
                    </div>
                    <div className="row" style={{'marginBottom':'50px'}}>
                        <div className="col-xs-12 col-md-4">
                            <h4>Investment Bank of the Year</h4>
                            <h5>ABSA – South Africa</h5> 
                            <h5>Coronation Merchant Capital – Nigeria</h5>
                            <h5>NedBank – South Africa</h5>
                            <h5>Rothschild</h5>
                            <h5>Standard Bank – South Africa</h5>

                        </div>
                        <div className="col-xs-12 col-md-4">
                            <h4>Award for Financial Inclusion</h4>
                            <h5>4G Capital – Kenya</h5>	
                            <h5>Amhara – Ethiopia</h5>	
                            <h5>Bank of Industry – Nigeria</h5>	
                            <h5>Cofina  – Senegal</h5>
                            <h5>Jumo – South Africa</h5>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <h4>Socially Responsible Bank of the Year</h4>
                            <h5>Access Bank – Nigeria</h5>	
                            <h5>Bank Misr – Egypt</h5>	
                            <h5>Equity Bank – Kenya</h5>	
                            <h5>KCB – Kenya</h5>	
                            <h5>Qalaa Holdings – Egypt</h5>

                        </div>
                    </div>
                    <div className="row" style={{'marginBottom':'50px'}}>

                        <div className="col-xs-12 col-md-4">
                            <h4>Innovation in Banking</h4>
                            <h5>ABSA – South Africa</h5>	
                            <h5>Family Bank – Kenya</h5>	
                            <h5>KCB – Kenya</h5>	
                            <h5>MCB Capital Markets – Mauritius</h5>	
                            <h5>Ubuntu Coin – Côte d'Ivoire</h5>
                        </div>

                        <div className="col-xs-12 col-md-4">
                            <h4>Deal of the Year - Equity</h4>
                            <h5>Al Ahly – Canal Sugar Equity</h5>	
                            <h5>EFG Hermes – ASA IPO</h5>	
                            <h5>RenCap – CiplaQCIL IPO</h5>	
                            <h5>Standard Bank / RMB – Vivo Energy IPO</h5>	
                            <h5>Standard Bank IBTC – Flour Mills of Nigeria Rights Issue</h5>

                        </div>
                        <div className="col-xs-12 col-md-4">
                            <h4>Deal of the Year - Debt</h4>
                            <h5>Absa – $350m Old Mutual Renewable Energy IPP Procurement Programme</h5>
                            <h5>Afrexim – $500m ChinaExim Syndicated Loan</h5>  
                            <h5>CIB – $389m Egyptian Refining Company</h5>
                            <h5>Rothschild – $2.2bn Republic of Senegal Dual-Currency Eurobond</h5> 
                            <h5>TDB – $1bn Sovereign Loan to GoK</h5>

                        </div>
                    </div>
                    <div className="row">

                        <div className="col-xs-12 col-md-4">
                            <h4>Infrastructure Deal of the Year</h4>
                            <h5>Absa – Enel Green Power</h5>   
                            <h5>Afrexim – Syndicated Loan for EBOMAF/Goverment of Cote D'Ivoire</h5>  
                            <h5>National Bank of Egypt – ElSewedy Electric Hydropower Project</h5>
                            <h5>RNB – Roggeveld Wind Power Project</h5>
                            <h5>TDB – Mozambique FLNG Project</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    
    }

}

module.exports = CurrentWinners;