import React from 'react';
import {useStateContext} from '../context/StateContextProvider'

const TransactionList = () => {

  const {transactions, deleteTransaction} = useStateContext();

  return (
    <>
        <h3>History</h3>
        <ul className='list'>

          {transactions.map( transaction => {
            const {id, text, amount} = transaction;
            const sign = amount < 0 ? "-" : "+"
            return(
               <li className={`${amount < 0 ? "minus" : "plus"}`} key={id}>
                   {text} <span>{sign} ${Math.abs(amount)}</span>
              <button className='delete-btn'
                      onClick={() => deleteTransaction(id)}
              >
                x
              </button>
           </li>
            )
          })}
          
        </ul>
    </>
  )
}

export default TransactionList