import styled from 'styled-components';

export const ListOfFriends = styled.ul`
  background-color: grey;
  width: 350px;
  display: flex;
  flex-direction: column;

  gap: 15px;
  border-radius: ${p => p.theme.radii.l};
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
`;

export const ItemOfFriends = styled.li`
  &:before {
    content: '';
    width: 15px;
    height: 15px;
    background-color: ${p => {
      return p.isonline ? p.theme.colors.online : p.theme.colors.accent;
    }};
    border-radius: 50%;
  }

  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: ${p => p.theme.radii.s};
  background-color: aquamarine;
  padding-top: 8px;
  padding-left: 8px;
  padding-bottom: 8px;
`;
