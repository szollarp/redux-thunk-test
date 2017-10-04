import { 
  FETCH_HTTPDATA_REQUEST,
  FETCH_HTTPDATA_SUCCESS,
  FETCH_HTTPDATA_FAILURE,
  fetchHttpData
} from './actions'

import HttpDataApp from './reducers'

describe('httpData reducer', () => {
  it('should return the initial state', () => {
    expect(HttpDataApp(undefined, {})).toEqual({
      isLoading: false,
      body: {},
      error: {}
    })
  })
  
  it('should handle FETCH_HTTPDATA_REQUEST', () => {
    expect(HttpDataApp(undefined, {
      type: FETCH_HTTPDATA_REQUEST
    })).toEqual({
      isLoading: true,
      body: {},
      error: {}
    })
  })
  
  it('should handle FETCH_HTTPDATA_SUCCESS', () => {
    expect(HttpDataApp(undefined, {
      type: FETCH_HTTPDATA_SUCCESS,
      body: { message: 'FETCH_HTTPDATA_SUCCESS' }
    })).toEqual({
      isLoading: false,
      body: { message: 'FETCH_HTTPDATA_SUCCESS' },
      error: {}
    })
  })
  
  it('should handle FETCH_HTTPDATA_FAILURE', () => {
    expect(HttpDataApp(undefined, {
      type: FETCH_HTTPDATA_FAILURE,
      error: { message: 'FETCH_HTTPDATA_FAILURE' }
    })).toEqual({
      isLoading: false,
      body: {},
      error: { message: 'FETCH_HTTPDATA_FAILURE' }
    })
  })
  
})