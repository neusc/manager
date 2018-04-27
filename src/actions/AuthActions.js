import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types'
import { Actions } from 'react-native-router-flux'
import firebase from 'firebase'

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_USER })
    // 登陆账户
    try {
      let user = await firebase.auth().signInWithEmailAndPassword(email, password)
      loginUserSuccess(dispatch, user)
    } catch (e) {
      try {
        // 创建账户
        let user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        loginUserSuccess(dispatch, user)
      } catch (e) {
        loginUserFail(dispatch)
      }
    }
  }
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
  // 登陆成功之后跳转页面
  // 跳转到scene group，会自动跳转到当前scene group下的第一个scene
  Actions.tabBar()
}

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL })
}
