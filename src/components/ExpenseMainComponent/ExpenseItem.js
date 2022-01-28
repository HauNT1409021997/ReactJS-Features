import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props)=>{
	const [status, setStatus] = useState(props.expenseDetail.status);
	const SetStatus = (value)=>{
		if(status==='Sold'){
			setStatus('Available');
		}else{
			setStatus('Sold');
		}
	}
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.expenseDetail.date}></ExpenseDate>
			<div className='expense-item__description'>
				<h2>{props.expenseDetail.title} Status: {status}</h2>
				<div className='expense-item__price'>{props.expenseDetail.amount}</div>
				<div><button className='baseButton' type='button' onClick={SetStatus}>Set Status</button></div>
				</div>
		</Card>
	);
}


export default ExpenseItem;