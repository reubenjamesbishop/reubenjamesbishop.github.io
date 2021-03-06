import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

import image_brideandgroom from '../images/brideandgroom.jpg';
import image_chessboard from '../images/chessboard.jpg';
import image_bridge from '../images/bridge.jpg';
import image_pool from '../images/pool.jpg';
import image_4 from '../images/img-4.jpg';
import image_5 from '../images/img-5.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1 className="cards__title">Ammenities and Activities</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={image_brideandgroom}
                            text="Residential Weddings"
                            label="Wedding"
                            path="/weddings"
                        />
                        <CardItem
                            src={image_pool}
                            text="House and Ammenities"
                            label="Ammenities"
                            path="/ammenities"
                        />
                        <CardItem
                            src={image_chessboard}
                            text="Reunions and Events"
                            label="Luxury"
                            path="/services"
                        />
                        <CardItem
                            src={image_chessboard}
                            text="Beep Beep Bitches"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={image_bridge}
                            text="Cruises and Adventures"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src={image_4}
                            text="Catering and Functions"
                            label="Luxury"
                            path="/services"
                        />
                        <CardItem
                            src={image_5}
                            text="Other activities"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
