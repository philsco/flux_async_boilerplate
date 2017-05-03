
import {ReduceStore} from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from '../Dispatcher';
import  DataOps  from '../utils/dataOps';

class Store extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    DataOps.loadPosts();
    return {
        errState: "",
        posts: [],
        comments: [],
        users: [],
        userDetails: {}
    };
  }

  reduce(state, action) {
    switch (action.type) {

      case ActionTypes.POST_DELETE:
        DataOps.deletePost ( action.postId );
        return state;

      case ActionTypes.POSTS_GOT:
        if ( action.err ) {
          return state = Object.assign({}, state, { errState: "Data failed to load" });
        }
        return state = Object.assign({}, state, { posts: action.payload.reverse() });

      case ActionTypes.LOAD_ERROR:
        return state;

      case ActionTypes.POST_CREATE:
        DataOps.createPost( action.payload );
//      Could add optimistic state update
        return state;



      default:
        return state;
    }
  }
}

export default new Store();