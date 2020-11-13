import React from 'react';
import { BsBellFill } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import Wrapper from './Wrapper';

function Header() {
  return (
    <NavBar>
      <Wrapper className="logo-container">
        <A href="https://codemi.co.id/">
          <Img
            src="https://codemi.co.id/wp-content/uploads/2019/08/codemi-394x150.png"
            alt="codemi - Logo"
          />
        </A>
      </Wrapper>
      <Wrapper className="profile-container">
        <BsBellFill color="#666" size={20} />
        <Img
          className="profile"
          src="https://e7.pngegg.com/pngimages/798/436/png-clipart-computer-icons-user-profile-avatar-profile-heroes-black.png"
          alt="codemi - Logo"
        />
        <RiArrowDropDownLine
          color="#bbb"
          size={30}
          style={{ marginLeft: -3 }}
        />
      </Wrapper>
    </NavBar>
  );
}

export default Header;
