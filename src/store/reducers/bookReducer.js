
const initState = {}

const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK_SUCCESS':
      console.log('create book success');
      return state;
    case 'CREATE_BOOK_ERROR':
      console.log('create book error');
      return state;
    default:
      return state;
  }
};

export default bookReducer;
