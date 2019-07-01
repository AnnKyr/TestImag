import rows from './Rows'


export const types = {
    FETCH_LIST_REQUEST: 'FETCH_LIST_REQUEST',
    FETCH_LIST_RESPONSE: 'FETCH_LIST_RESPONSE',
    FETCH_DETAILS_REQUEST: 'FETCH_DETAILS_REQUEST',
    FETCH_DETAILS_RESPONSE: 'FETCH_DETAILS_RESPONSE',
    CLEAR_LIST: 'CLEAR_LIST',
}
  
export const actionCreators = {
    fetchList: () => async (dispatch, getState) => {
        dispatch({type: types.FETCH_LIST_REQUEST})
  
        try {
    //  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    //  const list = await response.json()
        const list = rows;
        dispatch({type: types.FETCH_LIST_RESPONSE, payload: list})
        } catch (e) {
       //   console.warn(e)
       dispatch({type: types.FETCH_LIST_RESPONSE, payload: e, error: true})
        }
    },

    fetchDetails: id => async (dispatch, getState) => {
        dispatch({type: types.FETCH_DETAILS_REQUEST})
    
        try {
         //  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
         //  const list = await response.json()
            item = rows.find( function(element) {return (id == element.id)} )

    
            dispatch({type: types.FETCH_DETAILS_RESPONSE, payload: item})
        } catch (e) {
         //   console.warn(e)
            dispatch({type: types.FETCH_DETAILS_RESPONSE, payload: e, error: true})
        }
    },
  
    // It's common for action creators to return a promise for easy chaining,
    // which is why this is declared async (async functions always return promises).

    clearList: () => async (dispatch, getState) => {
         if (getState().list.data.length > 0) {
            dispatch({type: types.CLEAR_LIST})
        }
    }
}
  
const initialState = {
    list :
    {
        loading : true,
        error   : false,
        data    : [],  
    },

    details :
    {
        loading : true,
        error   : false,
        data    : {},  
    },
}
  
export const reducer = (state = initialState, action) => {
    const {type, payload, error} = action
  
    switch (type) {
        case types.FETCH_LIST_REQUEST: {
            return {...state, list: {...state.list, loading : true, error : false}}
        }
        case types.FETCH_LIST_RESPONSE: {
            if (error) {
                return {...state, list: {...state.list, loading : false, error : true}}
            }
  
            return {...state, list: {...state.list, loading : false , data : payload}}
        }
        case types.CLEAR_LIST: {
            return {...state, list: {...state.list, loading : false , data : []}}
        }
        case types.FETCH_DETAILS_REQUEST: {
            return {...state, details: {...state.details, loading : true, error : false}}
        }
        case types.FETCH_DETAILS_RESPONSE: {
            if (error) {
                return {...state, details: {...state.details, loading : false, error : true}}
            }
            return {...state, details: {...state.details, loading : false , data : payload}}
        }
    }
    
    return state
}