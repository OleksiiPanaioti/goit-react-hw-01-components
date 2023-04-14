import styled from 'styled-components';

export const ListOfFriends = styled.ul`
  background-color: ${p => p.theme.colors.bcgGrey};
  width: 350px;
  display: flex;
  flex-direction: column;

  gap: 15px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;

  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.75);
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
  background-color: ${p => p.theme.colors.paleBlue};
  padding-top: 8px;
  padding-left: 8px;
  padding-bottom: 8px;
`;
