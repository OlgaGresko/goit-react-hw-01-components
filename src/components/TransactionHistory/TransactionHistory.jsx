import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => (
    <table className={css.transaction_history}>
  <thead>
    <tr>
      <th className={css.head_block}>Type</th>
      <th className={css.head_block}>Amount</th>
      <th className={css.head_block}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {
        items.map(item => {
            return <tr key={item.id} className={css.table_row}>
                <td className={css.type}>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
                </tr>
        })
    }
   
  </tbody>
</table>
);

TransactionHistory.propTypes = {
    items: PropTypes.array
}

export default TransactionHistory;