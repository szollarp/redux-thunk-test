import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { 
  FETCH_HTTPDATA_REQUEST,
  FETCH_HTTPDATA_SUCCESS,
  FETCH_HTTPDATA_FAILURE,
  fetchHttpData
} from './actions'

import nock from 'nock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_HTTPDATA_SUCCESS when fetching data has been done', () => {
    nock('https://httpbin.org/')
      .get('/get')
      .reply(200, { url: 'https://httpbin.org/get' })

    const expectedActions = [
      { type: FETCH_HTTPDATA_REQUEST },
      { type: FETCH_HTTPDATA_SUCCESS, body: { url: 'https://httpbin.org/get' } }
    ]
    
    const store = mockStore({ isLoading: false, body: {}, ex: {} })
    return store.dispatch(fetchHttpData()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})