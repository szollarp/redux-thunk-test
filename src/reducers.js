import {
  FETCH_HTTPDATA_FAILURE,
  FETCH_HTTPDATA_REQUEST,
  FETCH_HTTPDATA_SUCCESS
} from './actions'

const initialState = {
  isLoading: false,
  body: {},
  error: {}
}

const HttpDataApp = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_HTTPDATA_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_HTTPDATA_SUCCESS:
      return {
        ...state,
        body: action.body,
        isLoading: false
      }
    case FETCH_HTTPDATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.ex
      }
    default:
      return state
  }
  
  return state
}

export default HttpDataApp