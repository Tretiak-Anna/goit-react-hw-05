import clsx from "clsx";
import css from "./TransactionHistory.module.css";

const TransactionItem = ({ type, amount, currency, className }) => {
  return (
    <tr className={className}>
      <td className={css.cell}>{type}</td>
      <td className={css.cell}>{amount}</td>
      <td className={css.cell}>{currency}</td>
    </tr>
  );
};

const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <table className={css.table}>
        <thead>
          <tr className={css.tableTitle}>
            <th className={css.cell}>Type</th>
            <th className={css.cell}>Amount</th>
            <th className={css.cell}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <TransactionItem
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
              className={clsx(index % 2 === 0 ? css.grey : css.white)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
