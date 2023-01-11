import styled from 'styled-components';

export const TopPage = styled.div`
margin-bottom: 10vh;
  width: 100%;
  background-color: #ededf5;
  height: 70vh;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 700px) {
    height: auto;
    flex-direction: column;

    justify-content: center;
  }

  img {
    width: auto;
    height: 100%;
    object-fit: contain;
    border-radius: 20px;
    @media (max-width: 700px) {
      width: 80%;
      height: auto;
    }
  }

  div {
    margin: 10%;
    font-weight: 700;
    font-size: 1.7rem;
    @media (max-width: 880px) {
      font-size: 1.5rem;
      margin-left: 5%;
    }
    @media (max-width: 800px) {
      font-size: 1.2rem;
      margin-left: 2%;
    }
    @media (max-width: 700px) {
width: 100%;
display: flex;
flex-direction: column;
align-items:center;
  }
  }

  h1 {
    margin: -1%;
    color: #eac00a;
  }
  h2 {
    margin: -1%;
    color: #fa494f;
  }
`;
