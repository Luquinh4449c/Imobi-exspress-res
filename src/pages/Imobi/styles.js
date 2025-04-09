import styled from "styled-components";

const breakpoints = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;

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
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const Description = styled.div`
  padding: 30px 0;

  h2, h5, p {
    margin-bottom: 15px;
    color: var(--secondary);
    word-break: break-word;
    overflow-wrap: break-word;
    line-height: 1.6;
  }
`;

export const Right = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  @media (min-width: ${breakpoints.tablet}) {
    width: 28%;
    margin-left: 2%;
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`;

export const ProfileImg = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    object-fit: cover;
  }
`;

export const ProfileDescriptin = styled.div`
  h3, p {
    margin-bottom: 10px;
    color: var(--secondary);
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;

export const ProfileContact = styled.div`
  margin-top: 20px;

  h3, p {
    margin-bottom: 10px;
    color: var(--secondary);
  }
`;

export const ProfileFormContact = styled.div`
  margin-top: 20px;

  h3 {
    margin-bottom: 10px;
    color: var(--secondary);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  p {
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;
