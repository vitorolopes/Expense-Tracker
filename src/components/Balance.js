import React from 'react';
import {useStateContext} from '../context/StateContextProvider';

const Balance = () => {

  const {transactions} = useStateContext();

  const balance = transactions.reduce( (total, currTransaction) => {
    total += currTransaction.amount
    return total
  }, 0).toFixed(2)

  return (
    <>
     <h4>Your Balance</h4>
    <h1>${balance}</h1>
    </>
 
  )
}

export default Balance