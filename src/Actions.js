
import ActionTypes from './data/ActionTypes';
import Dispatcher from './Dispatcher';

const Actions = {
  getPosts() {
    Dispatcher.dispatch({
      type: ActionTypes.POSTS_GET
    });
  },
  gotPosts( err, payload ) {
      Dispatcher.dispatch({
          type: ActionTypes.POSTS_GOT,
          err, payload
      });
  },
  updateData( payload ) {
    Dispatcher.dispatch({
      type: ActionTypes.UPDATE_DATA,
      payload
    })
  },
  createPost( payload ) {
    let postId = Date.now();
    payload = Object.assign({}, payload, { id: postId })
    Dispatcher.dispatch({
      type: ActionTypes.POST_CREATE,
      payload
    })
  },
  deletePost( postId ) {
    Dispatcher.dispatch({
      type: ActionTypes.POST_DELETE,
      postId
    })
  }
};

export default Actions;