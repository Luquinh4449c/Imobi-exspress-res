import styled from "styled-components";

const breakpoints = {
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};

export const Container = styled.div`
  padding: 15px 20px;
  background-color: var(--white);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (min-width: ${breakpoints.tablet}) {
    padding: 20px 50px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    padding: 25px 100px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 25px 150px;
  }
`;

// ✅ Wrapper interno para alinhamento horizontal
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled.div`
  img {
    width: 160px;

    @media (min-width: ${breakpoints.tablet}) {
      width: 220px;
    }

    @media (min-width: ${breakpoints.desktop}) {
      width: 280px;
    }
  }
`;

export const Menu = styled.div`
  ul {
    display: flex;
    align-items: center;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      border: 1px solid var(--gray);
      border-radius: 10px;
      padding: 8px;

      span {
        font-size: 1rem;
        font-weight: 300;
      }

      &:hover {
        background-color: var(--gray);
        cursor: pointer;
      }

      a, button {
        all: unset;
        cursor: pointer;
        color: var(--secondary);
      }
    }
  }
`;
