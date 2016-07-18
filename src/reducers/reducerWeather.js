import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

  switch (action.type) {
    case FETCH_WEATHER:
      // not mutating state, returning new version
      // always return new instance
      // es6 version of state.concat([action.payload.data])
      return [ action.payload.data, ...state ]
  }

  return state;
}
