import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_RESET
} from '../actions/types'

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
    case EMPLOYEE_UPDATE:
      // 注意属性名表达式的用法，表达式要放在方括号中
      return { ...state, [action.payload.prop]: action.payload.value }
    case EMPLOYEE_CREATE:
      return INITIAL_STATE
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE
    case EMPLOYEE_RESET:
      return INITIAL_STATE
  }
}
