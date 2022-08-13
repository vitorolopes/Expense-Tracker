import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const StateContext = createContext();

const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

export const StateContextProvider = ( { children } ) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const deleteTransaction = (id) => { 
        dispatch({type: "DELETE_TRANSACTION", payload: id})
        // state.transactions.filter( transaction => transaction.id !== id)
    }
    
    return(
        <StateContext.Provider
            value={{
                ...state,
                deleteTransaction
            }}
        >
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext)