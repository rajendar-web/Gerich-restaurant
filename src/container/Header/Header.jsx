import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info' >
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans'style={{margin:'2rem 0'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="headerimg"/>
    </div>
  </div>
);

export default Header;
