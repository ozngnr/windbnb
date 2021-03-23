import React, {useState} from 'react';
import {
  Container, 
  Wrapper, 
  Logo, 
  SearchBar, 
  Label,
  Input,
  SearchInput,
  SearchGuest, 
  SearchIcon,
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

Header.Search = function HeaderSearch({direction, destination, setDestination, ...restProps}) {
  const [searchActive, setSearchActive] = useState(false)
  
  return (
    <SearchBar direction={direction} {...restProps}>
      <SearchInput>
        <Label>{searchActive && "Location"}</Label>
        <Input 
          placeholder="Destination"
          value={destination} 
          onChange={e => setDestination(e.target.value)} 
        />
      </SearchInput>
      <SearchGuest><Label>{searchActive && 'Guests'}</Label>Add guests</SearchGuest>
      <SearchIcon onClick={() => setSearchActive(!searchActive)}>
        <span className="material-icons-round">search</span>
      </SearchIcon>
    </SearchBar>
  )
}

