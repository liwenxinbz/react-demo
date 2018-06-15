import React from 'react';
import LogoImg from './culture_pic_1_e7ee43a.svg';
import './logo.css';

class Logo extends React.Component {

    render() {
        return (
            <div className="logo-container">
                <img src={LogoImg} alt=""/>
            </div>
        );
    }
}

export default Logo;