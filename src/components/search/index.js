import React from 'react';
import { 
  Container, 
  Input, 
  Label, 
  StyledInput, 
  Button, 
  Icon, 
  Menu,
  MenuContainer,
  MenuBG, 
  Result,
  Text,
  Toggle,
  Wrapper 
} from "./styles/search"

export default function Search({ searchActive, direction, children, ...restProps}) {
  return <Container searchActive={searchActive} direction={direction} {...restProps}>{children}</Container>
}

Search.Location = function SearchInput({searchActive, label, ...restProps}) {
  return (
    <StyledInput searchActive={searchActive} {...restProps}>
      {label && <Label>{label}</Label>}
      <Input label={label} placeholder="Where to?" />
    </StyledInput>
  )
}

Search.Guest = function SearchGuest({ searchActive, label, ...restProps }) {
  return (
    <StyledInput searchActive={searchActive} {...restProps}>
      <Button label={label}> 
      {label && <Label>{label}</Label>}
      Add Guests  
      </Button>
    </StyledInput>
  )
}

Search.Button = function SearchButton({ size, dontShowOnSmallViewPort, children, ...restProps}) {
  return (
    <Icon size={size} dontShow={dontShowOnSmallViewPort} {...restProps}>
      <span className="material-icons-round">search</span>{children}
    </Icon>
  )  
}

Search.Menu = function SearchMenu({children, ...restProps}) {
  return (
    <MenuBG>
      <MenuContainer>
        <Menu {...restProps}>{children}</Menu>
      </MenuContainer>
    </MenuBG>
  )
}

Search.Result = function SearchResult({children, ...restProps}) {
  return <Result {...restProps}>{children}</Result>
}

Search.MenuToggle = function SearchToggle({ children, ...restProps }) {
  return (
    <Wrapper {...restProps}>
      <Text>{children}</Text>
      <Toggle><span className="material-icons-round">close</span></Toggle>
    </Wrapper>
  )
}