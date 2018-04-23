import firebase from 'firebase'
// Required for side-effects
require('firebase/firestore')
import { Actions } from 'react-native-router-flux'
import { EMPLOYEE_UPDATE } from './types'

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
}

export const employeeCreate = ({ name, phone, shift }) => {
  let db = firebase.firestore()
  let userId = firebase.auth().currentUser.uid
  // 不需要返回action，只需要返回一个纯函数就行
  // 此处使用firebase的Cloud Firestore作为数据库 https://firebase.google.com/docs/firestore/data-model
  return () => {
    db.collection('users').doc(userId).collection('employees').add({ name, phone, shift })
      .then(() => Actions.employeeList())
      .catch(error => {console.log(error)})
  }
}
