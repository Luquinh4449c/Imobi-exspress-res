import styled from "styled-components";

// Media query breakpoints
const breakpoints = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};

export const Container = styled.div`
  width: 100%;
  margin-bottom: 12px;
  background-color: var(--white);
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.1);
  
  /* Responsive card width */
  @media (min-width: ${breakpoints.mobile}) {
    width: 48%;
  }
  
  @media (min-width: ${breakpoints.tablet}) {
    width: 32%;
  }
  
  @media (min-width: ${breakpoints.laptop}) {
    width: 24%;
  }
`;

export const Img = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;

export const Description = styled.div`
  padding: 12px;
  
  @media (min-width: ${breakpoints.tablet}) {
    padding: 16px;
  }
  
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--secondary);
    flex-wrap: wrap;
    
    @media (min-width: ${breakpoints.tablet}) {
      flex-wrap: nowrap;
    }
  }
  
  h4 {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 8px;
    
    @media (min-width: ${breakpoints.tablet}) {
      font-size: 1rem;
      margin-bottom: 10px;
    }
  }
`;

export const Itens = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  
  span {
    margin-bottom: 8px;
    
    @media (min-width: ${breakpoints.tablet}) {
      margin-bottom: 10px;
    }
  }
`;