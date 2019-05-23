
import authReducer from './authReducer'
import bookReducer from './bookReducer'
import mailReducer from './mailReducer'
import eventReducer from './eventReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  book: bookReducer,
  mail: mailReducer,
  event: eventReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer

// the key name will be the data property on the state object
