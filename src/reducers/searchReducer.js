
const initialState = {
    searchedData:[],
    loadingValue :'',
    categ:'',
    regionVal:'',cityVal:'',skillVal:''
    }
    
    const SearchReducer = (state = initialState,action) =>{
    switch(action.type){
    case 'SET_LIST_DATA':{
    return {
    ...state,
    searchedData:action.showData
    }
    }
    case 'SET_LOADING_DATA':{
        return {
        ...state,
        loadingValue:action.loading
        }
        }
        case 'SET CATEG':{
            return {
            ...state,
            categ:action.categ
            }
            }
            case 'SET REGION':{
                return {
                ...state,
                regionVal:action.regionVal
                }
                }
                case 'SET CITY':{
                    return {
                    ...state,
                    cityVal:action.cityVal
                    }
                    }
                    case 'SET SKILL':{
                        return {
                        ...state,
                        skillVal:action.skillVal
                        }
                        }
    default:return state;
    }
    }
    
    export default SearchReducer;