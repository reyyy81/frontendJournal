import { FETCH_ALL } from "../constants/actionTypes";
import { CREATE } from "../constants/actionTypes";
import { UPDATE } from "../constants/actionTypes";
import { DELETE } from "../constants/actionTypes";
import { LIKE } from "../constants/actionTypes";



const func = (posts = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;
      case LIKE:
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
      case CREATE:
        return [...posts, action.payload];
      case UPDATE:
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
      case DELETE:
        return posts.filter((post) => post._id !== action.payload);
      default:
        return posts;
    }
  };
  
export default func;