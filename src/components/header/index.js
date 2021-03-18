import React from 'react';
import {
  Container, 
  Wrapper, 
  Logo, 
  Search, 
  SearchInput, 
  SearchIcon
} from "./styles/header"

const Header = ({children, ...restProps}) => {
  return ( 
    <Container {...restProps}>{children}</Container>
   );
}
 
export default Header;

Header.Wrapper = function HeaderWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Header.Logo = function HeaderLogo({...restProps}) {
  return <Logo {...restProps}/> 
}

Header.Search = function HeaderSearch({...restProps}) {
  return (
    <Search {...restProps}>
      <SearchInput placeholder="Destination"/>
      <SearchInput type="number" placeholder="Add Guests"/>
      <SearchIcon>
        <span className="material-icons">search</span>
      </SearchIcon>
    </Search>
  )
}