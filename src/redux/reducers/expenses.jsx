import { ADD_EXPENSE } from "../action-types/expenses";

const initialState = {
    expenseList : [],

}
//whatever action we will trigger will pass to the reducer
export const expenseReducer=(state=initialState,action) => {
    switch(action.type) {
        case ADD_EXPENSE : {
            return {
                ...state,
                expenseList: [...state.expenseList,action.data],
            }
        }
        default : 
        return state;
    }
}