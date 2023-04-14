import styled from 'styled-components';

export const Table = styled.table`
  text-align: center;
  width: 450px;
  /* background-color: aqua; */
  table-layout: fixed;

  border-collapse: collapse;
`;

export const Tbody = styled.tbody`
  text-align: left;

  tr:nth-child(even) {
    background-color: #00ffd99f;
  }

  tr:nth-child(odd) {
    background-color: #2b7e76;
  }
`;

export const Trow = styled.tr``;

export const Thead = styled.thead``;
