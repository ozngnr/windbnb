import styled from "styled-components"

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 1em 0.75em;

  @media(min-width: 725px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media(min-width: 1024px) {
    padding: 2rem 6rem;
  }
`;
export const Logo = styled.img`
  align-self: flex-start;
  margin-bottom: 2em;

  @media(min-width: 725px){
    margin-top: 26px;
  }
`;

export const Search = styled.div`
  display: flex;
  align-self: center;
  max-width: 300px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

export const SearchInput = styled.input`
  font-family: "Mulish", sans-serif;
  font-size: 0.825em;
  min-width:0;
  padding: 1em 1.5em;
  border: 1px solid transparent;
  border-radius: 16px 0 0 16px;

  &:last-of-type {
    border: 1px #F2F2F2;
    border-style: none solid;
    border-radius: 0;
  }

  &::placeholder {
    color: #BDBDBD;
  }

  &:focus {
    outline: none;
    border: 1px solid red;
  }
`;

export const SearchIcon = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  padding: 16px;
  color: rgba(235, 87, 87, 0.9);
  cursor:pointer;
`;
