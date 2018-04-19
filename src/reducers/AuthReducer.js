import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
    case EMAIL_CHANGED:
      // 此处不能直接使用state.email = action.payload
      // 直接修改state，redux比较新旧state会发现是相同的所以不会触发更新
      return { ...state, email: action.payload }
    case  PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case LOGIN_USER:
      return { ...state, loading: true, error: '' }
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, ...INITIAL_STATE } // 登陆成功之后状态初始化
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed', password: '', loading: false }
  }
}
