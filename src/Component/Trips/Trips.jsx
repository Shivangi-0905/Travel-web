import React from 'react'
import TripsCSS from './../Trips/Trips.module.css'

import trip01 from '/./src/assets/trips01.jpg'
import trip02 from '/./src/assets/trips02.jpg'
import trip03 from '/./src/assets/trips03.jpg'
import trip04 from '/./src/assets/trips04.jpg'
import trip05 from '/./src/assets/trips05.jpg'
import trip06 from '/./src/assets/trips06.jpg'
import trip07 from '/./src/assets/trips07.jpg'
import trip08 from '/./src/assets/trips08.jpg'


function Trips() {
  return (
    <div className={`${TripsCSS.Trips_wrapper} section`} id='trips'>
        <h2>Popular Trips</h2>

        <div className={TripsCSS.cards}>
            <div className={TripsCSS.card}>
                <img src={trip01} alt="" />
                <div className={TripsCSS.TripContent}>
                    <div className={TripsCSS.rating}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-half-fill'></i>
                    </div>

                    <h3>Australia Panorma</h3>

                    <div className={TripsCSS.TripDetails}>
                        <span><i className='ri-calender-line'></i> 7 Days</span>
                        <span><i className='ri-map-pin-line'></i> 5 places</span>
                        <span><i className='ri-flag-line'></i> Australia</span>
                    </div>

                    <div className={TripsCSS.Pricing}>
                        <span className={TripsCSS.price}>$1,200</span>
                        <button className={TripsCSS.book}>Book Now</button>
                    </div>
                    
                </div>

            </div>
            <div className={TripsCSS.card}>
                <img src={trip02} alt="" />
                <div className={TripsCSS.TripContent}>
                    <div className={TripsCSS.rating}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-half-fill'></i>
                        <i className='ri-star-line'></i>
                    </div>

                    <h3>Best of Spain</h3>

                    <div className={TripsCSS.TripDetails}>
                        <span><i className='ri-calender-line'></i> 5 Days</span>
                        <span><i className='ri-map-pin-line'></i> 10 places</span>
                        <span><i className='ri-flag-line'></i>Spain </span>
                    </div>

                    <div className={TripsCSS.Pricing}>
                        <span className={TripsCSS.price}>$1,800</span>
                        <button className={TripsCSS.book}>Book Now</button>
                    </div>
                    
                </div>

            </div>
            <div className={TripsCSS.card}>
                <img src={trip03} alt="" />
                <div className={TripsCSS.TripContent}>
                    <div className={TripsCSS.rating}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-half-fill'></i>
                    </div>

                    <h3>Italy</h3>

                    <div className={TripsCSS.TripDetails}>
                        <span><i className='ri-calender-line'></i> 15 Days</span>
                        <span><i className='ri-map-pin-line'></i> 5 places</span>
                        <span><i className='ri-flag-line'></i> Italy</span>
                    </div>

                    <div className={TripsCSS.Pricing}>
                        <span className={TripsCSS.price}>$1,100</span>
                        <button className={TripsCSS.book}>Book Now</button>
                    </div>
                    
                </div>

            </div>
            <div className={TripsCSS.card}>
                <img src={trip04} alt="" />
                <div className={TripsCSS.TripContent}>
                    <div className={TripsCSS.rating}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-half-fill'></i>
                    </div>

                    <h3>Canyonlands</h3>

                    <div className={TripsCSS.TripDetails}>
                        <span><i className='ri-calender-line'></i> 5 Days</span>
                        <span><i className='ri-map-pin-line'></i> 8 places</span>
                        <span><i className='ri-flag-line'></i> Canyonlands</span>
                    </div>

                    <div className={TripsCSS.Pricing}>
                        <span className={TripsCSS.price}>$2,100</span>
                        <button className={TripsCSS.book}>Book Now</button>
                    </div>
                    
                </div>

            </div>
            <div className={TripsCSS.card}>
                <img src={trip05} alt="" />
                <div className={TripsCSS.TripContent}>
                    <div className={TripsCSS.rating}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-half-fill'></i>
                    </div>

                    <h3>India</h3>

                    <div className={TripsCSS.TripDetails}>
                        <span><i className='ri-calender-line'></i> 10 Days</span>
                        <span><i className='ri-map-pin-line'></i> 25 places</span>
                        <span><i className='ri-flag-line'></i> India</span>
                    </div>

                    <div className={TripsCSS.Pricing}>
                        <span className={TripsCSS.price}>$3,200</span>
                        <button className={TripsCSS.book}>Book Now</button>
                    </div>
                    
                </div>

            </div>
            <div className={TripsCSS.card}>
                <img src={trip06} alt="" />
                <div className={TripsCSS.TripContent}>
                    <div className={TripsCSS.rating}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-half-fill'></i>
                    </div>

                    <h3>France Discovery</h3>

                    <div className={TripsCSS.TripDetails}>
                        <span><i className='ri-calender-line'></i> 7 Days</span>
                        <span><i className='ri-map-pin-line'></i> 5 places</span>
                        <span><i className='ri-flag-line'></i> France</span>
                    </div>

                    <div className={TripsCSS.Pricing}>
                        <span className={TripsCSS.price}>$900</span>
                        <button className={TripsCSS.book}>Book Now</button>
                    </div>
                    
                </div>

            </div>
            <div className={TripsCSS.card}>
                <img src={trip07} alt="" />
                <div className={TripsCSS.TripContent}>
                    <div className={TripsCSS.rating}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-half-fill'></i>
                    </div>

                    <h3>Japan In Work</h3>

                    <div className={TripsCSS.TripDetails}>
                        <span><i className='ri-calender-line'></i> 7 Days</span>
                        <span><i className='ri-map-pin-line'></i> 4 places</span>
                        <span><i className='ri-flag-line'></i> Japan</span>
                    </div>

                    <div className={TripsCSS.Pricing}>
                        <span className={TripsCSS.price}>$2,000</span>
                        <button className={TripsCSS.book}>Book Now</button>
                    </div>
                    
                </div>

            </div>
            <div className={TripsCSS.card}>
                <img src={trip08} alt="" />
                <div className={TripsCSS.TripContent}>
                    <div className={TripsCSS.rating}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-half-fill'></i>
                    </div>

                    <h3>Explore Bali 10-Day Tour</h3>

                    <div className={TripsCSS.TripDetails}>
                        <span><i className='ri-calender-line'></i> 10 Days</span>
                        <span><i className='ri-map-pin-line'></i> 15 places</span>
                        <span><i className='ri-flag-line'></i> Bali</span>
                    </div>

                    <div className={TripsCSS.Pricing}>
                        <span className={TripsCSS.price}>$1,200</span>
                        <button className={TripsCSS.book}>Book Now</button>
                    </div>
                    
                </div>

            </div>

        
        </div>
    </div>
  )
}

export default Trips