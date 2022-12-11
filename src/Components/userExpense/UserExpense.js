
import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './userExpense.css'

const UserExpense=(props)=>{

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler=(Data)=>{

        const ExpenseData={
            ...Data,
            id: Math.random().toString(),
        };

        props.onAddExpense(ExpenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };

    return(
        <div className='new-expense'>
          {!isEditing && (
           <button onClick={startEditingHandler}>Add New Expense</button>
         )}
          {isEditing && (
            <ExpenseForm
              onSaveExpenseData={saveExpenseDataHandler}
              onCancel={stopEditingHandler}
            />
        )}
        </div>
  );
};

export default UserExpense;