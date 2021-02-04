import { actionTypes } from '../actions';


export default (state = null, action) => {
  return state;
};


// export default (state=null, action) => {
//   switch (action.type) {
//     case actionTypes.SET_SECRET_WORD:
//       return action.payload;
//     default:
//       return state;
//   }
// }

// switch (action.type) {
//   case actionTypes.CORRECT_GUESS:
//     return true;
//   default:
//     return false;
// }
