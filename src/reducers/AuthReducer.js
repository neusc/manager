const INITIAL_STATE = { email: '' }
import { EMAIL_CHANGED } from '../actions/types'

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
    case EMAIL_CHANGED:
      // 此处不能直接使用state.email = action.payload
      // 直接修改state，redux比较新旧state会发现是相同的所以不会触发更新
      return { ...state, email: action.payload }
  }
}
