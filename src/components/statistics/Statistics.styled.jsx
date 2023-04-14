import styled from 'styled-components';

export const Section = styled.section`
  background-color: aquamarine;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.75);
`;

export const ListStat = styled.ul`
  width: 100%;

  display: flex;
`;

export const ItemStat = styled.li`
  width: calc((100% - 60px) / 4);
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-radius: ${p => p.theme.radii.s}; */
  background-color: beige;
`;
