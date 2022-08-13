import React from 'react';
import {useStateContext} from '../context/StateContextProvider'

const Header = () => {

  const {initialState} = useStateContext();

  console.log(initialState.transactions[0].text)

  return (
    <h2>Expense Tracker</h2>
  )
}

export default Header