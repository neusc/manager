const INITIAL_STATE = { email: '' }
import { EMAIL_CHANGED } from '../actions/types'

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
    case EMAIL_CHANGED:
      console.log('action!')
  }
}
