import React from 'react';

import './card.css';

export const Card = () => {
    return (
        <div className="birthdayCard">
            <div className="cardFront">
                <h3 className="happy">HAPPY BIRTHDAY!</h3>
                <div className="balloons">
                    <div className="balloonOne" />
                    <div className="balloonTwo" />
                    <div className="balloonThree" />
                    <div className="balloonFour" />
                </div>
            </div>
            <div className="cardInside">
                <h3 className="back">HAPPY BIRTHDAY Rani Gustriani!</h3>
                <p>Dear Friend,</p>
                <p>
                    Selamat Ulang Tahun Gais :v
                </p>
                <p className="name">@GAIS</p>
            </div>
        </div>
    )
}