const initState = {}

const byReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_BUY_SUCCESS':
      console.log('create buy success');
      return state;
    case 'CREATE_BUY_ERROR':
      console.log('create buy error');
      return state;
    default:
      return state;
  }
};

export default buyReducer;
