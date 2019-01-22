
const initialState = {
    paginationValue:'',
    }
    
    const PaginationReducer = (state = initialState,action) =>{
    switch(action.type){
    case 'SET_PAGINATION_DATA':{
    return {
    ...state,
    paginationValue:action.pageNo
    }
    }
    default:return state;
    }
    }
    
    export default PaginationReducer;