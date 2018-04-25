import firebase from 'firebase'
// Required for side-effects
require('firebase/firestore')
import { Actions } from 'react-native-router-flux'
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_RESET,
  EMPLOYEE_DELETE_SUCCESS
} from './types'

// 更新雇员表单信息的action creator
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
}

// 创建新雇员的action creator
export const employeeCreate = ({ name, phone, shift }) => {
  let db = firebase.firestore()
  let userId = firebase.auth().currentUser.uid
  // 此处使用firebase的Cloud Firestore作为数据库 https://firebase.google.com/docs/firestore/data-model
  return (dispatch) => {
    db.collection('users').doc(userId).collection('employees').add({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE }) // 创建雇员成功后重置创建表单的数据
        Actions.main({ type: 'reset' })// 去除当前页面左上角的返回按钮
      })
      .catch(error => {console.log(error)})
  }
}

// 获取雇员列表的action creator
export const employeesFetch = () => {
  let db = firebase.firestore()
  let userId = firebase.auth().currentUser.uid
  let employees = {}
  return (dispatch) => {
    // onSnapshot监听当前用户下employees集合的变化
    // 当创建、更新或删除集合里的内容时会自动触发回调，redux自动发送action
    // 此处有坑，不能监听employees集合的父级文档
    db.collection('users').doc(userId).collection('employees')
      .onSnapshot(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          employees[doc.id] = doc.data()
        })
        // dispatch必须放在promise成功回调中，否则可能没有获取到数据就dispatch
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: employees })
      }, function (error) {
        console.log(error)
      })
  }
}

// 更新并保存雇员信息的action creator
export const employeeSave = ({ name, phone, shift, uid }) => {
  let db = firebase.firestore()
  let userId = firebase.auth().currentUser.uid
  // 此处使用firebase的Cloud Firestore作为数据库 https://firebase.google.com/docs/firestore/data-model
  return (dispatch) => {
    db.collection('users').doc(userId).collection('employees').doc(uid).set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS }) // 更新雇员信息成功后重置创建表单的数据
        Actions.main({ type: 'reset' })// 去除当前页面左上角的返回按钮
      })
      .catch(error => {console.log(error)})
  }
}

// 删除雇员的action creator
export const employeeDelete = ({ uid }) => {
  let db = firebase.firestore()
  let userId = firebase.auth().currentUser.uid
  // 此处使用firebase的Cloud Firestore作为数据库 https://firebase.google.com/docs/firestore/data-model
  return (dispatch) => {
    db.collection('users').doc(userId).collection('employees').doc(uid).delete()
      .then(() => {
        dispatch({ type: EMPLOYEE_DELETE_SUCCESS }) // 更新雇员信息成功后重置创建表单的数据
        Actions.main({ type: 'reset' })// 去除当前页面左上角的返回按钮
      })
      .catch(error => {console.log(error)})
  }
}

// 重置表单信息的action creator
export const employeeReset = () => {
  return {
    type: EMPLOYEE_RESET
  }
}
