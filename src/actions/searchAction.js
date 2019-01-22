export function searchAct(showData, loading,categ,regionVal,cityVal,skillVal){
    console.log("Showdat->>>>>>>>>",loading,categ,regionVal,cityVal,skillVal);
    return (dispatch) => {  dispatch({ type: 'SET_LIST_DATA', showData },
    );
    dispatch({ type: 'SET_LOADING_DATA', loading });
    dispatch({ type: 'SET CATEG', categ });
    dispatch({ type: 'SET REGION', regionVal });
    dispatch({ type: 'SET CITY', cityVal });
    dispatch({ type: 'SET SKILL', skillVal });
    }
    }
