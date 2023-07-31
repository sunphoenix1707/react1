import React from 'react'
import './expense-list.css';
import { UseSelector, useSelector } from 'react-redux';
import Card from './card'
const ExpenseList = () => {
    const {expenseList:list} = useSelector(state=>state.expenses);
   
  return  (
    <div className='expense-list'>
      {list.length? (
        list.map((item)=>
        <Card item={item} />)
      ): (<div className='empty-state'>
        <img 
        src={require("../../expenseimg/money-bag.png")}
         alt='Empty List' 
         className='empty-image'
          />
        <label> Uh oh! Your Expense List is Empty  </label>
        </div>
        )}
    </div>
        
  );
}

export default ExpenseList
// {list.length ? list.map((item) => <Card item={item}/>):null}
