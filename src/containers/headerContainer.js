import React from 'react';
import { Header } from '../components';
import siteLogo from "../images/logo.svg"

const HeaderContainer = () => {
  return ( 
    <Header>
      <Header.Wrapper>
        <Header.Logo src={siteLogo} alt="windbnb logo"/>
        <Header.Search />
      </Header.Wrapper>
    </Header> 
  );
}
 
export default HeaderContainer;