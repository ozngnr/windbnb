import styled from "styled-components"

export const Container = styled.div`
`;

export const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2em;
  max-width: 1440px;
  padding: 0 .75em;
  margin: 2.5em auto;
  border: 1px solid blue;

  @media(min-width: 1024px) {
    padding: 0 6rem;
  }
`;

export const Title = styled.h3`
  font-size: .875em;
  font-weight: 600;
`;

export const Image = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  border-radius: 24px;
  margin-bottom: .75em;
`;

export const Info = styled.div`
  display: flex;
  align-items:center;
  margin-bottom: .75em;
`;

export const Text = styled.p`
  font-size: .75em;
  color: #828282;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  font-size: .75rem;
  color: #4f4f4f;

  span {
    color: #EB5757;
  }
`;

export const Super = styled.div`
  font-size: .75em;
  font-weight: 700;
  color: #4f4f4f;
  margin-right: 1em;
  padding: .5em .875em;
  border: 1px solid #4F4F4F;
  border-radius: .75em;
`;