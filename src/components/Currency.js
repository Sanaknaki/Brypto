import React from 'react';
import './Currency.css';

const Currency = props => {
    const {
        id,
        name,
        symbol,
        price_usd,
        rank,
        percent_change_1h,
        percent_change_24h,
        percent_change_7d,
    } = props.data

    let successBadge = 'success';
    let dangerBadge = 'danger';

    // Design badge based on if price change is +/-
    function priceColour(e) {
        if(e > 0) {
            return successBadge
        }else {
            return dangerBadge
        }
    }
    // if(percent_change_1h > 0) {
    //     successBadge
    // } else {
    //     dangerBadge
    // }

    // if(percent_change_24h > 0) {
    //     successBadge
    // } else {
    //     dangerBadge
    // }

    // if(percent_change_7d > 0) {
    //     successBadge
    // } else {
    //     dangerBadge
    // }

    return (
        <React.Fragment>
            {/* Each crypto price is structured as such */}
            <div className="alert alert-crypto" role="alert" alt={id}>
                    <div className="row">
                        <div className="col-md-2 middle-man">
                        <span class="badge badge-light">#{rank}</span>
                        </div>
                        <div className="col-md-7 middle-man">
                            <h2 className="alert-heading"><strong>{name}</strong> | {symbol}</h2>
                            <h5>${(+price_usd).toFixed(2)}</h5>
                        </div>

                        <div className="col-md-1 middle-man" style={{marginBottom: "6px"}}>
                            <span className={"badge badge-"+ priceColour(percent_change_1h)}>{percent_change_1h}% 1hr</span>
                        </div>

                        <div className="col-md-1 middle-man" style={{marginBottom: "6px"}}>
                            <span className={"badge badge-"+ priceColour(percent_change_24h)}>{percent_change_24h}% 24hrs</span>
                        </div>
                        <div className="col-md-1 middle-man" style={{marginBottom: "6px"}}>
                            <span className={"badge badge-"+ priceColour(percent_change_7d)}>{percent_change_7d}% 7d</span>
                        </div>
                    </div>
            </div>
        </React.Fragment>
    );
}

export default Currency;