import React from 'react';
import { amountFlowFormatter } from '../utils/amountFlowFormatter';

export default function TransactionWidgetRow({transactionDetail}) {
    return (
        <tr>
            <td>{transactionDetail.date}</td>
            <td>{transactionDetail.description}</td>
            <td>{transactionDetail.referenceNumber}</td>
            <td>{amountFlowFormatter(transactionDetail.amount)}</td>
        </tr>
    )
}
