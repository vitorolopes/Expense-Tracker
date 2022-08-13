const reducer = (prevState, action) => {
    switch(action.type){
        case "DELETE_TRANSACTION": {
            const newState = {
                ...prevState,
                transactions: prevState.transactions
                    .filter( transaction => 
                                transaction.id !== action.payload)
            }
            return newState
        }
        case "ADD_TRANSACTION": {
            const newState = {
                        ...prevState, 
                        transactions: [...prevState.transactions, action.payload]
            }
            return newState
        }
        default:
            return prevState
    }
    
}

export default reducer