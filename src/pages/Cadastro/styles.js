import styled from "styled-components";

const breakpoints = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};

export const Container = styled.div`
  padding: 100px 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 1.875rem;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.5rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.25rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 15px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1rem;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 0.95rem;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 80px 100px;
  }

  @media (max-width: ${breakpoints.laptop}) {
    padding: 60px 50px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 40px 20px;
  }
`;

export const ContainerForm = styled.div`
  padding: 35px;
  width: 370px;
  background-color: var(--white);

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    padding: 25px 20px;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const Label = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-weight: 500;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
  }
`;
