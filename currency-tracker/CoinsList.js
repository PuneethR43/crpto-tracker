import React from 'react'

const CoinsList = ({coins:{ image, name, symbol, current_price, market_cap, total_volume}}) => {
    return(
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="coin" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className>{current_price.toLocaleString()}{' '}INR</p>
                    <p className="coin-market">Mkt Cap: {market_cap.toLocaleString()}{' '}INR</p>
                    <p className="coin-volume">Vol: {total_volume.toLocaleString()}</p>
                </div>
            </div>                
        </div>
    )
}
export default CoinsList