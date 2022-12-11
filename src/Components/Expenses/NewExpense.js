import './Expenses.css'
import ExpenseItem from './ExpenseItem.js'
import Card from '../UI/Card'
import '../UI/Card.css'
import React,{useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

//import './ExpenseList.css'

function NewExpense(props){

    const [filteredYear,setFilteredYear]= useState('2020');


    const saveFilterHandler=(selectedYear)=>
    {
        setFilteredYear(selectedYear);
    }


    const filteredExpense= props.items.filter((expense)=>{
        return expense.date.getFullYear().toString()===filteredYear;
    });

    let filteredContent= <p>No Expenses Found</p>



    if(filteredExpense.length>0)
    {
        filteredContent=filteredExpense.map((expense) => (
            <ExpenseItem
              key= {expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
    }
    
    return(

    <div>
        
        <Card comp='expenses'>
            <ExpensesFilter selected={filteredYear} onFilter={saveFilterHandler}/>
            <ExpensesChart expenses={filteredExpense} />
            {filteredContent}
               
        </Card>
    </div>
        
    )
}

export default NewExpense;