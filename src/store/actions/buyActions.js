
export const createBuy = (buy) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('buys').add({
      ...buy,

      createdAt: new Date(),
      
    }).then(() => {
      dispatch({ type: 'CREATE_BOOK_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_BOOK_ERROR' }, err);
    });
  }
};
