import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  background-color: grey;
  margin: 0 auto;
  width: 350px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.75);
`;

export const Picture = styled.img`
  margin-top: 25px;
  width: 250px;
  border-radius: 50%;
`;

export const Stats = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

export const List = styled.li`
  width: calc(100% / 3);
  display: flex;
  background-color: antiquewhite;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;
