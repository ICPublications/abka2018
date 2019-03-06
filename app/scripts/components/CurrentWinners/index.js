import React from 'react'

export class CurrentWinners extends React.Component{
    render(){
        return(
            <div className="col-xs-12 currentWinners" style={{'textAlign':'center'}}>
                <h1>2018 Winners</h1>
                <div className="row" style={{'marginBottom':'50px'}}>
                    <div className="col-xs-12 col-md-4">
                        <h4>African Banker of the Year</h4>
                        <h5>James Mwangi, Equity Group Holdings plc, kenya</h5>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <h4>Lifetime Achievement Award</h4>
                        <h5>Stephen Koself, co-founder Investec</h5>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <h4>African Bank of the Year</h4>
                        <h5>Ecobank</h5>
                    </div>
                </div>
                <div className="row" style={{'marginBottom':'50px'}}>
                    <div className="col-xs-12 col-md-4">
                        <h4>Best Retail Bank in Africa</h4>
                        <h5>Ecobank</h5>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <h4>Investment Bank of the Year</h4>
                        <h5>Standard Bank</h5>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <h4>Award for Financial Inclusion</h4>
                        <h5>Groupe Crédit Agricole (Morocco)</h5>
                    </div>
                </div>
                <div className="row" style={{'marginBottom':'50px'}}>
                    <div className="col-xs-12 col-md-4">
                        <h4>Socially Responsible Bank of the Year</h4>
                        <h5>BMXE Bank of Africa </h5>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <h4>Innovation in Banking</h4>
                        <h5>Ecobank</h5>
                        
                    </div>

                    <div className="col-xs-12 col-md-4">
                        <h4>Deal of the Year - Equity</h4>
                        <h5>Steinhof Africa Retail Listing - Rand Merchant Bank (South Africa)</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <h4>Deal of the Year - Debt</h4>
                        <h5>$300m Diaspora Bond, Nigeria <br /> Standard Bank / FBNQuest Merchant Bank (Nigeria)</h5>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <h4>Infrastructure Deal of the Year</h4>
                        <h5>Nacala Railway and Port Corridor <br /> Standard Bank / Rand Merchant Bank (South Africa)</h5>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <h4>Regional Bank of the Year</h4>
                        <h5>East Africa - CRDB (Tanzania) <br /> West Africa - BDM (Mali) <br /> North Africa - CIB, Egypt <br /> Southern Africa - State Bank Mauritius (SBM) <br /> Central Africa - BGFI, Gabon</h5>
                    </div>
                </div>
            </div>
        )
    
    }

}

module.exports = CurrentWinners;