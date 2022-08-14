import React from 'react';
import {useStateContext} from '../context/StateContextProvider'

const IncomeExpense = () => {

  const {transactions} = useStateContext();

  console.log(transactions);

  const incomeArr = transactions.filter( transaction => transaction.amount > 0);
  const income = incomeArr.reduce( (total, currIncome) => {
    total += currIncome.amount
    return total
  },0).toFixed(2)

  const expensesArr = transactions.filter( transaction => transaction.amount <0);
  const expenses = expensesArr.reduce( (total, currExpense) => {
      total += currExpense.amount
      return total
  },0).toFixed(2)

  return (
    <div className='inc-exp-container'>
        <div>
           <h4>INCOME</h4> 
           <p className='money plus'>+${income}</p>
        </div>
        <div>
           <h4>EXPENSE</h4> 
           <p className='money minus'>-${expenses}</p>
        </div>
        

    </div>
  )
}

export default IncomeExpense