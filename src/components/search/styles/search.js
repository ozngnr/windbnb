import styled, { css } from "styled-components"

export const Container = styled.div`
  display:grid;
  grid-template-columns: ${({searchActive}) => 
    searchActive ? 'repeat(auto-fill,minmax(360px, 1fr))': '140px 1fr 50px'
  };
  margin-bottom: 1.5em;
  width: ${({searchActive}) => searchActive && "100%" };
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

`;

export const StyledInput = styled.div`
  position: relative;

  ${(searchActive) => 
    searchActive && 
    css`
    &:first-of-type {
        border-bottom: 1px solid #F2F2F2;
    }

    @media(min-width: 800px) {
      border: 0;
      border-right: 1px solid #F2F2F2;
    }
  `}
  }


`;

export const Input = styled.input`
  font-family: "Mulish", sans-serif;
  font-size: 14px;
  width: 100%;
  padding: 18px 16px;
  ${({label}) => label && `padding: 24px 26px 12px 26px`};
  line-height: 18px;
  border: 1px solid transparent;
  border-radius: 16px;

  &::placeholder {
    color: #BDBDBD;
  }

  &:focus {
    outline: none;
    border: 1px solid #333;
  }
`;

export const Label = styled.span`
  position:absolute;
  display: block;
  font-weight: 800;
  font-size: 9px;
  line-height: 1;
  text-transform: uppercase;
  top: 12px;
  left: 26px;
  color: #333333;
  z-index: 9;
`;

export const Button = styled.button`
  font-family: "Mulish", sans-serif;
  font-size: 14px;
  text-align: left;
  width: 100%;
  padding: 18px 16px;
  ${({label}) => label && `padding: 24px 26px 12px 26px`};
  border: 1px solid transparent;
  border-radius: 16px;
  color: #BDBDBD;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: 0;
    border: 1px solid #333;
  }
`;
export const Icon = styled.button`
  font-family: "Mulish", sans-serif;
  font-size: 14px;
  font-weight: 700;
  padding: 0 12px;
  color: rgba(235, 87, 87, 0.9);
  background: transparent;
  border: 1px solid transparent;
  border-radius: 16px;
  cursor: pointer;

  &:focus {
    outline: none;
    border: 1px solid #333;
  }
  
  ${({size}) => 
    (size === "lg") &&
    css`
      display: flex;
      align-items: center;
      color: #fff;
      background: rgba(235, 87, 87, 0.9);
      box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
      margin: auto;
      padding: 1em 2em;

      span {
        font-size: 24px;
        margin-right: .25em;
      }
    `}

  @media(max-width: 1100px) {
    ${({dontShow}) => dontShow && `display: none;`};
  }
`;

export const MenuBG = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top:0;
  left:0;
  background: rgba(79, 79, 79, 0.4);
  overflow: auto;
`;

export const MenuContainer = styled.div`
  background: #fff;
`;

export const Menu = styled.div`
  padding: 1.125rem 1rem;
  max-width: 1440px;
  margin: auto;

  @media(min-width: 1024px) {
    padding: 2rem 6rem;
  }
`;
export const Result = styled.div`
  margin: 2.5em ; 
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
`;

export const Text = styled.p`
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  cursor: default;

`;

export const Toggle = styled.button`
  display:flex;
  padding: 0;
  background: none;
  border: 0;
  cursor: pointer;
`;