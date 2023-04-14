import PropTypes from 'prop-types';
import { Table, Tbody, Trow, Thead, Td } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <Tbody>
        {items.map(item => (
          <Trow key={item.id}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </Trow>
        ))}
      </Tbody>
    </Table>
  );
};

TransactionHistory.propType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
