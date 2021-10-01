import React from 'react';
import './Head.css';

const Head = () => {
    return (
        <div className="head-outer-wrap">
            <div className="head-inner-wrap">
                <div className="head-title-address-wrap">
                    <h1 className="head-title">Luna Bella</h1>
                    <p className="head-address">104 Grand Isle Way - Hot Springs, AR</p>
                </div>
                <div className="head-social-wrap">
                    <a>Facebook</a>
                    <a>Yelp</a>
                </div>
            </div>
        </div>
    );
};

export default Head