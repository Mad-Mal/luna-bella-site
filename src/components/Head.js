import React from 'react';
import './Head.css';
import fbLogo from '../iconmonstr-facebook-6-240.png';
import tripA from '../49637.png'

const Head = () => {
    return (
        <div className="head-outer-wrap">
            <div className="head-inner-wrap">
                <div className="head-title-address-wrap">
                    <h1 className="head-title"><span className="luna">LUNA</span><span className="bella"> Bella</span></h1>
                    <p className="head-address">104 Grand Isle Way - Hot Springs, AR</p>
                </div>
                <div className="head-social-wrap">
                    <a className="social-icons"><img className='fbLogo' src={fbLogo} width='35' height='35' /></a>
                    <a className="social-icons"><img className='tripLogo' src={tripA} width='50' height='50'/></a>
                </div>
            </div>
        </div>
    );
};

export default Head