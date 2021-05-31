import React,{useState, useEffect} from 'react'
import axios from 'axios'

import CoinsList from './CoinsList'

const CurrencyList = () => {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => {
                setCoins(res.data);
            })
            .catch(err => console.log(err))
    }, [setCoins])
    
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    
    const filteredCoins = coins.filter((coin) => {
        return coin.name.toLowerCase().includes(search.toLowerCase())
    })

    return(
        <div>
            {console.log('from list',coins)}
            <div className='coin-app'>
                <div className='coin-search'>
                    <h1 className='coin-text'>Search for the currency here</h1>
                <form>
                    <input 
                        type="text" 
                        placeholder="Search..."
                        value={search} 
                        onChange={handleChange} 
                        name="search" 
                        className='coin-input'
                    />
                </form>
                </div>
            </div>
            <div>
                {filteredCoins.map((coin) => {
                    return(
                        <CoinsList 
                            key={coin.id} 
                            coins={coin} 
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default CurrencyList