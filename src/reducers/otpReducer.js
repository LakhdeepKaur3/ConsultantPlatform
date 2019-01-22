
const initialState = {
   demo:''
    }
    
    const otpReducer = (state = initialState,action) =>{
    switch(action.type){
    case 'SET_OTP':{
    return {
    ...state,
    demo:action.showOtp
    }
    }
    default:return state;
    }
    }
    
    export default otpReducer;