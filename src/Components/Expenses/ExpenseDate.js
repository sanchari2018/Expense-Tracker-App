import './ExpenseDate.css'
import './ExpenseItem.js'


function ExpenseDate(props){

    const Month=props.date.toLocaleString('en-US',{Month : 'long'});
    //const Day=props.date.toLocaleString('en-US',{Day : '2-digit'});
    const Year=props.date.getFullYear();

    return(

        <div>
            <div className='expense-date'>
                <div className='expense-date__year'>{Year}</div>
                <div className='expense-date__month'>{Month}</div>
            </div>
        </div>

        
    )
}

export default ExpenseDate;

