const initState = {}

const mailReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_MAIL_SUCCESS':
      console.log('create mail success');
      return state;
    case 'CREATE_MAIL_ERROR':
      console.log('create mail error');
      return state;
    default:
      return state;
  }
};

export default mailReducer;
