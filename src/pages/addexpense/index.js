import React from 'react'
import "./addexpense.css"
import TopFold from '../../components/topfold';
import AddForm from '../../components/add-form';

const AddExpense = () => {
  
  return (
    <div className='add-expense'>
      <TopFold/>
      <AddForm/>
    </div>
  )
};
export default AddExpense;
