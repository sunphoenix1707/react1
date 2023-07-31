import React from 'react'
import './add-form.css'
import 'react-toastify/dist/ReactToastify.css';
import { categories } from '../../constants/add-expense'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast , ToastContainer} from 'react-toastify';
import addExpense from '../../redux/actions/expenses'
import SuccessModal from './success-modal';
function AddForm() {
    const cat = categories
    const [categeryOpen, setCategoryOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState()
    const [modalOpen,setModalOpen] = useState(false);
    const dispatch = useDispatch()

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleAmount = (e) => {
        const val = parseFloat(e.target.value)
        if (isNaN(val)) {
            setAmount("")
            return
        }
        setAmount(val)
    }
    const handleCategory = (category) => {
        setCategory(category)
        setCategoryOpen(false)
    }

    const handleSubmit = () => {
        if (title === '' || amount === "" || category==='') {
            const notify = () => toast("Please Enter Valid Data");
            notify();
            return;
           
        }
        const data = {
            title,
            amount,
            category,
            createdAt: new Date()
        }
        console.log("here")
        dispatch(addExpense(data))
        setModalOpen(true);
    }
    return (
        <div className='add-form'>
            <ToastContainer
                    position="bottom-left"
                    autoClose={1500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    />
                    <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <div className='form-item'>
                {/* <label>Amount</label> */}
                <label>Title</label>
                <input placeholder='Given a name to your expenditure'
                    value={title}
                    onChange={(e) => handleTitle(e)} />
            </div>
            <div className='form-item'>
            <label>Amount ₹</label>
            <input value={amount} placeholder="enter Amount"
                className='amount-input'
                onChange={(e) => handleAmount(e)} />
                </div>
            <div className='category-container-parent'>
                <div className='category'>
                    <div
                        className='category-dropdown'
                        onClick={() => setCategoryOpen(!categeryOpen)}>
                        <label>{category ? category.title : 'category'}</label>
                        <i class="fi fi-rr-angle-down"></i>
                    </div>
                    {categeryOpen && <div className='category-container'>
                        {cat.map(category => (
                            <div className='category-item' style={{
                                borderRight: `5px solid ${category.color}`
                            }} key={category.id} onClick={() => handleCategory(category)}>

                                <label>{category.title}</label>
                                <img src={category.icon} alt={category.title} />
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
            <div className='form-add-button'>
                <div onClick={handleSubmit}>
                    <label>Add</label>
                    <i class="fi fi-rs-paper-plane"></i>
                </div>
            </div>
        </div>
    )
}

export default AddForm
