import {GET_DASHBOARD,CLEAR_CURRENT_DASHBOARD} from '../actions/types'
const initialState={

    dashboard:{},
    loading:false
}
export default function(state = initialState, action) {
    switch (action.type) {
      case GET_DASHBOARD:
        return {
          ...state,
          dashboard: action.payload
        };
        case CLEAR_CURRENT_DASHBOARD:
        return {
          ...state,
          dashboard: {}
        };
      default:
        return state;
    }
    
  }