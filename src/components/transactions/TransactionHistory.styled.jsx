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
    background-color: #ffffffe7;
  }

  tr:nth-child(odd) {
    background-color: #b7bbbbea;
  }
`;

export const Trow = styled.tr`
  height: 40px;
`;

export const Thead = styled.thead`
  background-color: #00bfffe9;
  height: 40px;
  color: #f4f4f4e9;
`;

export const Td = styled.td`
  padding: 10px;
`;
