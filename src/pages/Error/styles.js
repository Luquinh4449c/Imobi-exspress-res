import styled from "styled-components";

// Media query breakpoints
const breakpoints = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};

export const Container = styled.div`
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 120px 30px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 150px 50px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    padding: 200px 100px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 250px 150px;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;

    @media (min-width: ${breakpoints.mobile}) {
      font-size: 2.5rem;
    }

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 3.5rem;
    }

    @media (min-width: ${breakpoints.laptop}) {
      font-size: 5rem;
    }

    @media (min-width: ${breakpoints.desktop}) {
      font-size: 6.25rem;
    }
  }

  p {
    font-size: 1rem;
    margin-bottom: 15px;

    @media (min-width: ${breakpoints.mobile}) {
      font-size: 1.05rem;
    }

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 1.1rem;
    }

    @media (min-width: ${breakpoints.laptop}) {
      font-size: 1.2rem;
    }
  }
`;
