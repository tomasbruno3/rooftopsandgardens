
export const createMail = (mail) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('mailDb').add({
      ...mail,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_MAIL_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_MAIL_ERROR' }, err);
    });
  }
};
