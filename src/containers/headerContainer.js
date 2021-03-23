import React, { useState } from 'react';
import { Header, Search } from '../components';
import siteLogo from "../images/logo.svg"
import staysData from "../stays.json"

const HeaderContainer = () => {
  const [destination, setDestination] = useState(staysData)
  const [guests, setGuests] = useState(0)
  const [searchActive, setSearchActive] = useState(true)

  console.log(destination)
  console.log(staysData.filter(stay => stay.city.toLowerCase().startsWith(destination)))
  
  return (
    <> 
      <Header>

        <Header.Wrapper>
          <Header.Logo src={siteLogo} alt="windbnb logo"/>
          <Search >
            <Search.Location />
            <Search.Guest />
            <Search.Button />
          </Search>
        </Header.Wrapper>
      
      </Header> 

      {searchActive && 
        <Search.Menu>
          <Search.MenuToggle>Edit your search</Search.MenuToggle>
          <Search searchActive={searchActive}> 
            <Search.Location searchActive={searchActive} label="location"/>
            <Search.Guest  searchActive={searchActive} label="guests" />
            <Search.Button dontShowOnSmallViewPort size="lg">Search</Search.Button> 
          </Search>
          {destination.map(stay => (
            <Search.Result><span className="material-icons-round">place</span>{stay.city}, {stay.country}</Search.Result>
          ))}
          <Search.Button size="lg" >Search</Search.Button>
        </Search.Menu>
      }
    </>
  );
}
 
export default HeaderContainer;