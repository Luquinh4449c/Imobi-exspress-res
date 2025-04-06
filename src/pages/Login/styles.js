import styled from "styled-components";

// Breakpoints
const breakpoints = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};

export const Container = styled.div`
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 80px 50px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    padding: 100px 100px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 100px 150px;
  }

  h2 {
    font-size: 1.5rem;

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 1.75rem;
    }

    @media (min-width: ${breakpoints.laptop}) {
      font-size: 1.875rem;
    }
  }

  p {
    font-size: 1rem;
    margin-bottom: 15px;

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 1.1rem;
    }

    @media (min-width: ${breakpoints.laptop}) {
      font-size: 1.2rem;
    }
  }
`;

export const ContainerForm = styled.div`
  padding: 25px 20px;
  width: 100%;
  max-width: 370px;
  background-color: var(--white);

  @media (min-width: ${breakpoints.mobile}) {
    padding: 30px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 35px;
  }

  p {
    margin-top: 15px;
    font-size: 0.95rem;
    text-align: center;

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 1rem;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const Label = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-weight: 500;
`;
