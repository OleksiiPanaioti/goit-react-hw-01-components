import PropTypes from 'prop-types';
import { Table, Tbody, Trow, Thead } from './TransactionHistory.styled';
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
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
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
