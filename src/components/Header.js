import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {Logo} from '../components/Logo.js';
import phoneLogo from '../img/svg/Phone.svg';
import chatLogo from '../img/svg/Chat.svg';


export function Header () {
    return (
      <section className="header">
      <div className="header__container">
        <Link to="/"> <Logo /> </Link> 
        <nav className="header__nav">
            <Link to="/about"> About us </Link>
            <Link to="/services"> Services </Link>
            <Link to="/work"> Work </Link>
            <Link to="/news"> News </Link>
            <Link to="/contacts"> Contacts </Link>
        </nav>
        <div className="header__contacts">
            <div className="contacts__item">
              <img className="contacts__img" src={phoneLogo} alt="Phone Logo"/>
              <div className="contacts__info">
                <div className="contacts__title"> Call us </div>
                <div className="contacts__text"> (405) 555-0128 </div>
              </div>
            </div>
            <div className="contacts__item">
              <img className="contacts__img" src={chatLogo} alt="Chat Logo"/>
              <div className="contacts__info">
                <div className="contacts__title"> Talk to us </div>
                <div className="contacts__text"> hello@createx.com </div>
              </div>
            </div>
        </div>
      </div>

        

        
      </section>
    );
}