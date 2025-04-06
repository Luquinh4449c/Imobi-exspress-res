import styled from "styled-components";

// Breakpoints
const breakpoints = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};

export const Container = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 50px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 20px 150px;
  }
`;

export const Left = styled.div`
  width: 100%;
  padding: 20px;

  h2 {
    font-size: 1.17em;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 49%;
  }
`;

export const Right = styled.div`
  width: 100%;
  padding: 20px;

  h2 {
    font-size: 1.17em;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 49%;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  margin-top: 10px;
  padding: 25px;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px 0;
  background-color: #fff;
`;
