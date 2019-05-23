export const createEvent = (event) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('createEvent').add({
      ...event,

      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_EVENT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_EVENT_ERROR' }, err);
    });
  }
};
