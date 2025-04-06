import styled from "styled-components";

// Media query breakpoints
const breakpoints = {
  mobile: "576px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
};

export const Container = styled.div`
  padding: 80px 20px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');

  /* Mobile-friendly padding */
  @media (max-width: ${breakpoints.mobile}) {
    padding: 60px 15px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 120px 50px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    padding: 150px 100px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 200px 150px;
  }

  :before {
    background-color: rgba(0, 0, 0, 0.6);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export const Text = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 80%;
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: 65%;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 55%;
  }

  h2 {
    color: var(--white);
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 24px;
    }

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 42px;
      margin-bottom: 25px;
    }

    @media (min-width: ${breakpoints.laptop}) {
      font-size: 52px;
      margin-bottom: 30px;
    }

    @media (min-width: ${breakpoints.desktop}) {
      font-size: 62px;
      margin-bottom: 35px;
    }
  }

  p {
    color: var(--white);
    margin-bottom: 20px;
    font-size: 0.95rem;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 0.875rem;
    }

    @media (min-width: ${breakpoints.tablet}) {
      margin-bottom: 25px;
    }
  }

  span {
    background-color: var(--blue);
    border: 0;
    color: var(--white);
    font-size: 14px;
    font-weight: 600;
    padding: 12px 30px;
    line-height: 24px;
    border-radius: 3px;
    cursor: pointer;
    display: inline-block;
    text-align: center;

    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }

    @media (min-width: ${breakpoints.tablet}) {
      padding: 12px 60px;
    }

    @media (min-width: ${breakpoints.laptop}) {
      padding: 12px 90px;
    }

    @media (min-width: ${breakpoints.desktop}) {
      padding: 12px 120px;
    }
  }
`;
