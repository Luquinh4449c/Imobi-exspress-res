import styled from "styled-components";

const breakpoints = {
  mobile: "576px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 100px 150px;
  background-color: var(--white);

  @media (max-width: ${breakpoints.desktop}) {
    padding: 80px 100px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${breakpoints.laptop}) {
    padding: 60px 50px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 30px;
    grid-template-columns: 1fr;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px 20px;
  }
`;

export const Item = styled.div`
  img {
    width: 200px;

    @media (max-width: ${breakpoints.mobile}) {
      width: 150px;
    }
  }

  h3 {
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 15px;

    li {
      padding: 12px 0;
      white-space: nowrap;
    }
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    gap: 15px;
    margin-bottom: 15px;

    li {
      span {
        margin-right: 15px;
      }
    }
  }
`;

export const Copy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 150px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.desktop}) {
    padding: 20px 100px;
  }

  @media (max-width: ${breakpoints.laptop}) {
    padding: 20px 50px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 20px 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px 20px;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 10px;

    li {
      white-space: nowrap;

      span {
        margin-left: 15px;
      }
    }
  }
`;
