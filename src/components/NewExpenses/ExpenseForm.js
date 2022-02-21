import { useState } from 'react'
import Modal from '../UI/Modal';

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title, setTitle]=useState('');        
    const [date, setDate]=useState('');
    const [amount, setAmount]=useState('');
    const [show,setShow] = useState(false)
    
    const inputChangeHandler = (event)=>{
        const currentInput = event.target.name;   
        if(currentInput === 'title'){             
            setTitle(event.target.value)
        }else if(currentInput === 'amount'){      
            setAmount(event.target.value)
        }else if(currentInput === 'date'){       
            setDate(event.target.value)
        }
    }
    
    const submitHandler = (event)=>{
        event.preventDefault()
        const currentData={                        
            title,
            amount,
            date,           
        }
      async function potstHandler(){
            const response = await fetch('https://expence-tracker-react-63b6a-default-rtdb.firebaseio.com/login.json',{
                method: 'POST',
                body:JSON.stringify(currentData),
                headers:{
                    'Content-type': 'application/json'
                }
            }) 
            const data = response.json() 
            console.log(data);
            props.onAddExpense()

            setShow(true)

        }
        potstHandler()
        props.onSaveExpenseData()        
    }
    const confirmHandler =() =>{
        setShow(false)
    }

    
	return (
        <>
        {show && 
<Modal title = "Note" message = "Data saved successfully" onConfirm = {confirmHandler}/>}
        <form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input name='title' type='text' onChange={inputChangeHandler} value={title}/>                       {/* ар бир input'ка озунчо name берип алабыз, айырмалаш учун */}
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input name='amount' type='number' min="0" step="1" onChange={inputChangeHandler} value={amount}/>  {/* ар бир input'ка озунчо name берип алабыз, айырмалаш учун */}
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input name='date' type='date' min="2022-01-01" onChange={inputChangeHandler} value={date}/>        {/* ар бир input'ка озунчо name берип алабыз, айырмалаш учун */}
				</div>
			</div>
            <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
            </div>
		</form>
        </>
	)
}
export default ExpenseForm
