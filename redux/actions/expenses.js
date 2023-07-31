import
 { ADD_EXPENSE ,
    DELETE_EXPENSE,

} from "../action-types/expenses"

//CREATE FUNCTIONS
const addExpense=(data) => {
    console.log(data);
    return {
        type:ADD_EXPENSE,
        data,
    };
};
export default addExpense;
export const deleteExpense=(data)=> {
    return {
        type:DELETE_EXPENSE,
        data,
    };
};