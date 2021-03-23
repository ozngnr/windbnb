import styled from "styled-components"

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
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

export const SearchBar = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction === "column" ? "column" : "row"};
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  
`;

export const SearchInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 18px 16px;

  &::after {
    content:"";
    position: absolute;
    width: 1px;
    height: 100%;
    background: #F2F2F2;
    right: 0;
  }
`;

export const Label = styled.span`
  display: block;
  font-weight: 800;
  font-size: 9px;
  line-height: 1.9;
  text-transform: uppercase;
  color: #333333;
`;

export const Input = styled.input`
  font-family: "Mulish", sans-serif;
  font-size: 14px;
  width: 100%;
  padding: 0;
  line-height: 18px;
  border: 0;

  &::placeholder {
    color: #BDBDBD;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid rgba(235, 87, 87, 0.9);
  }
`;

export const SearchIcon = styled.button`
  border:0;
  padding: 18px 16px;
  background: transparent;
  color: rgba(235, 87, 87, 0.9);
  cursor:pointer;

  span {
    display:block;
    line-height: 16px;
  }
`;

export const SearchGuest = styled.button`
  font-family: "Mulish", sans-serif;
  font-size: 14px;
  line-height: 18px;
  padding: 18px 16px;
  border:0;
  border-right: 1px solid #F2F2F2;
  background: transparent;
  color: #BDBDBD;
  text-align: left;


`;

export const SearchMenu = styled.div`
  position: fixed;
  background: white;
  width: 100%;
  padding: 3rem;
  top:0;
`;