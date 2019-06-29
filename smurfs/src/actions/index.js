/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'

export const FETCHING_DATA = 'FETCHING_DATA'
export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL'
export const FETCH_FAILURE = 'FETCH_FAILURE'

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const addSmurf = async dispatch => {
  dispatch({ type: FETCHING_DATA })
  try {
    const { data } = await axios.post()
    dispatch({ type: FETCH_SUCCESSFUL, payload: data.something })
  } catch (err) {
    dispatch({ type: FETCH_FAILURE, payload: err })
  }
}

export const getSmurfs = async dispatch => {
  dispatch({ type: FETCHING_DATA })
  try {
    const { data } = await axios.get()
    dispatch({ type: FETCH_SUCCESSFUL, payload: data.something })
  } catch (err) {
    dispatch({ type: FETCH_FAILURE, payload: err })
  }
}
