import styled from 'styled-components';

export const Table = styled.table`
  text-align: center;
  width: 450px;

  table-layout: fixed;

  border-collapse: collapse;
`;

export const Tbody = styled.tbody`
  text-align: left;
  color: #7b7777e7;
  tr:nth-child(even) {
    background-color: ${p => p.theme.colors.lightGrey};
  }

  tr:nth-child(odd) {
    background-color: ${p => p.theme.colors.grey};
  }
`;

export const Trow = styled.tr`
  height: 40px;
`;

export const Thead = styled.thead`
  background-color: ${p => p.theme.colors.bcgBlue};
  height: 40px;
  color: #f4f4f4e9;
`;

export const Td = styled.td`
  padding: 10px;
`;
