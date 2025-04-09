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
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    padding: 20px 50px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    padding: 20px 100px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 20px 150px;
  }
`;

export const Left = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  @media (min-width: ${breakpoints.tablet}) {
    width: 70%;
  }
`;

export const Thumb = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const Description = styled.div`
  padding: 30px 0;

  h2,
  p {
    margin-bottom: 15px;
    color: var(--secondary);
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;

export const Right = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  @media (min-width: ${breakpoints.tablet}) {
    width: 28%;
    margin-top: 0;
    margin-left: 2%;
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ProfileImg = styled.div`
  width: 100%;
  margin-bottom: 15px;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  @media (min-width: ${breakpoints.mobile}) {
    width: 115px;
    margin-bottom: 0;
  }
`;

export const ProfileDescriptin = styled.div`
  flex: 1;

  h3,
  p {
    margin-bottom: 15px;
    color: var(--secondary);
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;

export const ProfileContact = styled.div`
  h3,
  p {
    margin-bottom: 15px;
    color: var(--secondary);
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;

export const ProfileFormContact = styled.div`
  h3 {
    margin-bottom: 15px;
    color: var(--secondary);
  }

  form {
    display: flex;
    flex-direction: column;
  }

  p {
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;
