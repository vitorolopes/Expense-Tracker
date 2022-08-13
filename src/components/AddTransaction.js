import React, {useState} from 'react';
import {useStateContext} from '../context/StateContextProvider'

const AddTransaction = () => {

 const [text, setText] = useState("");
 const [amount, setAmount] = useState(0);

 const {addTransaction} = useStateContext();

 const handleSubmit = (e) => { 
    console.log("mau caralhinho")
    e.preventDefault()
    const newTransaction = {
        id: Math.floor( Math.random() * 1000000),
        text,
        amount: + amount // adding the + transforms the string into a number
    }
    addTransaction(newTransaction)
    setText("")
    setAmount(0)
  }

  return (
    <>
        <h3>AddTransaction</h3>    
        {/* // TODO: onSubmit */}
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label>Text</label>
                <input type="text" placeholder='Enter text ...' 
                       value={text}
                       onChange= {(e)=>setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Amount <br />
                 (negative - expense, positive - income)</label>
                <input type="number" placeholder='Enter amount ...' 
                       value={amount}
                       onChange={ (e) => setAmount(e.target.value)}
                />
            </div>

            <button className='btn' >
                Add Transaction
            </button>
           
        </form>
    </>
  )
}

export default AddTransaction