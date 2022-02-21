import React from 'react'
import Card from './components/UI/Card'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'
import { useState, useCallback,useEffect } from 'react'
import Animation from './components/NewExpenses/Animation'

function App() {
	const  [expenses, setExpenses]= useState([])
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	
  
	const fetchExpenseHandler = useCallback(async () => {
	  setIsLoading(true);
	  setError(null);
	  try {
		const response = await fetch('https://expence-tracker-react-63b6a-default-rtdb.firebaseio.com/login.json');
		if (!response.ok) {
		  throw new Error('Something went wrong!');
		}
  
		const data = await response.json();
  
		const transformedExpense =[]
		for(const key in data){
			transformedExpense.push({
				id: key,
				title: data[key].title,
				amount: data[key].amount,
				date: new Date(data[key].date)
			})
		}
		setExpenses(transformedExpense);
	  } catch (error) {
		setError(error.message);
	  }
	  setIsLoading(false);
	}, []);
  
	 useEffect(() => {
	  fetchExpenseHandler();
	}, [fetchExpenseHandler]);

	let content = <p className='content' >Found no data.</p>;

	if (expenses.length > 0) {
	  content = <Expenses items={expenses}/>
	}
  
	if (error) {
	  content = <p>{error}</p>;
	}
  
	if (isLoading) {
	  content = <Animation/>
	  
	}
	
	return (
		<Card >
			<NewExpenses onAddExpense={fetchExpenseHandler}/> 
			  <span>{content}</span>                       
		</Card>
	)
}

export default App;
