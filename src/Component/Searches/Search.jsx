import React from 'react';
import searchCSS from './../Searches/Search.module.css'

function Search() {
  return (
    <div className={`${searchCSS.search_wrapper} section`} id='searches'>
        <h1>Popular Searches</h1>
        <div className={searchCSS.Cards}>
            <div className={searchCSS.card}>
                <i className='ri-search-line'></i>

                <h3> Domestic Trips <span> See America In a New Light</span></h3>

            </div>
            <div className={searchCSS.card}>
                <i className='ri-search-line'></i>

                <h3> Vacation in 14 Days <span>Limited Avealiablity and Seling Fast</span></h3>

            </div>
            <div className={searchCSS.card}>
                <i className='ri-search-line'></i>

                <h3> Offer for Travelling Groups <span> Save When you 9+ Guests</span></h3>

            </div>
            <div className={searchCSS.card}>
                <i className='ri-search-line'></i>

                <h3> Tours Under $2000 <span> Browse Our Value Vacations </span></h3>

            </div>
            <div className={searchCSS.card}>
                <i className='ri-search-line'></i>

                <h3> Past Guests Benefits <span> Saving With Globle Tour Rewards </span></h3>

            </div>
            <div className={searchCSS.card}>
                <i className='ri-search-line'></i>

                <h3> Past Guests Benefits <span> Saving With Globle Tour Rewards </span></h3>

            </div>
            
        </div>
    </div>
  )
}

export default Search