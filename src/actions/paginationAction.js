export function paginationData(pageNo){
    console.log("Showdat pagination->>>>>>>>>",pageNo);
    return (dispatch) => { 
         dispatch({ type: 'SET_PAGINATION_DATA', pageNo },
    );
   
    }
    }
