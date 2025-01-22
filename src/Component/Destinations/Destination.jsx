import React from "react";
import destinationCSS from './../Destinations/Destination.module.css'
import destination01 from '/src/assets/Destination01.jpg'
import destination02 from '/src/assets/destination02.jpg'
import destination03 from '/src/assets/destination03.jpg'
import destination04 from '/src/assets/Destination04.jpg'
import destination05 from '/src/assets/Destination05.jpg'
import destination06 from '/src/assets/Destination06.jpg'

function Destination() {
    return(
        <div className={`${destinationCSS.Destination_Wrapper} section`} id="populardestinations">
            <h2>
                Popular Destinations
            </h2>

            <div className={destinationCSS.DestinationCards}>
                <div className={destinationCSS.DestinationCard}>
                    <img src={destination01} alt="img-destination" />
                    <div className={destinationCSS.DestinationDetails}>
                        <h3>Europe</h3>
                        <div className={destinationCSS.btns}>
                            <a href="#">All Destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
                <div className={destinationCSS.DestinationCard}>
                    <img src={destination02} alt="img-destination" />
                    <div className={destinationCSS.DestinationDetails}>
                        <h3>Asia</h3>
                        <div className={destinationCSS.btns}>
                            <a href="#">All Destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
                <div className={destinationCSS.DestinationCard}>
                    <img src={destination03} alt="img-destination" />
                    <div className={destinationCSS.DestinationDetails}>
                        <h3>N.America</h3>
                        <div className={destinationCSS.btns}>
                            <a href="#">All Destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
                <div className={destinationCSS.DestinationCard}>
                    <img src={destination04} alt="img-destination" />
                    <div className={destinationCSS.DestinationDetails}>
                        <h3>L.America</h3>
                        <div className={destinationCSS.btns}>
                            <a href="#">All Destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
                <div className={destinationCSS.DestinationCard}>
                    <img src={destination05} alt="img-destination" />
                    <div className={destinationCSS.DestinationDetails}>
                        <h3>Australia</h3>
                        <div className={destinationCSS.btns}>
                            <a href="#">All Destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
                <div className={destinationCSS.DestinationCard}>
                    <img src={destination06} alt="img-destination" />
                    <div className={destinationCSS.DestinationDetails}>
                        <h3>Africa</h3>
                        <div className={destinationCSS.btns}>
                            <a href="#">All Destinations</a>
                            <a href="#">Deals</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination