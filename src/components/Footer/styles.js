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
  }

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 60px 50px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    padding: 40px 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px 20px;
  }
`;

export const Item = styled.div`
  img {
    width: 200px;
  }

  h3 {
    margin-bottom: 10px;
  }

  ul {
    li {
      padding: 12px 0;
    }
  }

  nav {
    display: flex;
    margin-top: 15px;
    flex-wrap: row;

    li {
      span {
        margin-right: 15px;
      }
    }
  }

  // Esconde todos os Items (exceto o primeiro com logo) no tablet e menores
  @media (max-width: ${breakpoints.tablet}) {
    &:not(:first-child) {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    img {
      width: 100%;
      max-width: 150px;
    }

    nav {
      flex-direction: row;
      gap: 10px;
      align-items: flex-start;

      li {
        margin-bottom: 10px;

        span {
          margin-right: 0;
        }
      }
    }
  }
`;

export const ItemMobile = styled.div`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;

    h3 {
      margin-bottom: 10px;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        padding: 8px 0;
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

  ul {
    display: flex;
    align-items: center;

    li {
      span {
        margin-left: 15px;
      }
    }
  }

  @media (max-width: ${breakpoints.laptop}) {
    padding: 20px 80px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 20px 40px;

    ul {
      flex-direction: column;
      align-items: flex-start;

      li {
        margin-bottom: 10px;

        span {
          margin-left: 0;
        }
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;

    ul {
      li:nth-child(n + 2) {
        display: none;
      }
    }
  }
`;
