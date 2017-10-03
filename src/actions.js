import fetch from 'isomorphic-fetch'

export const FETCH_HTTPDATA_REQUEST = 'FETCH_HTTPDATA_REQUEST'
export const FETCH_HTTPDATA_SUCCESS = 'FETCH_HTTPDATA_SUCCESS'
export const FETCH_HTTPDATA_FAILURE = 'FETCH_HTTPDATA_FAILURE'

function fetchHttpDataRequest() {
  return {
    type: FETCH_HTTPDATA_REQUEST
  }
}

function fetchHttpDataSuccess(body) {
  return {
    type: FETCH_HTTPDATA_SUCCESS,
    body
  }
}

function fetchHttpDataFailure(error) {
  return {
    type: FETCH_HTTPDATA_FAILURE,
    error
  }
}

export function fetchHttpData() {
  return dispatch => {
    dispatch(fetchHttpDataRequest())    
    return fetch('https://httpbin.org/get')
      .then(res => res.json())
      .then(json => dispatch(fetchHttpDataSuccess(json)))
      .catch(error => dispatch(fetchHttpDataFailure(error)))
  }
}