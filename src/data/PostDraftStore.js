
import {ReduceStore} from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from '../Dispatcher';

class PostDraftStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return {
        postTitle: "",
        postBody:""
    };
  }

  reduce(state, action) {
    switch (action.type) {

    case ActionTypes.UPDATE_DATA:
        return state = Object.assign({}, state, {[ action.payload.Path ]: action.payload.Value });

    case ActionTypes.POST_CREATE:
        return state = { postTitle: "", postBody:"" };

      default:
        return state;
    }
  }
}

export default new PostDraftStore();