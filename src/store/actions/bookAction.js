
export const createBooking = (book) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('bookTable').add({
      ...book,
    
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_BOOK_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_BOOK_ERROR' }, err);
    });
  }
};
