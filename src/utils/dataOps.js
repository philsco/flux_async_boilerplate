
import ApiOps from './apiOps';
import Dispatcher from '../Dispatcher';

const DataOps = {

  loadPosts() {
    ApiOps
      .get('', '', '/posts')
      .then(posts => {
        Dispatcher.dispatch({
          type: 'POSTS_GOT',
          err: null, 
          payload: posts
        });
      })
      .catch(error => {
        Dispatcher.dispatch({
          type: 'POSTS_GOT',
          err: error,
          payload: null 
        });
      });
  },

  createPost( payload ) {
    ApiOps
      .post( '', '', '/posts', payload )
      .then( posts => {
        Dispatcher.dispatch({
          type: 'POST_CREATED',
          err: null,
          payload: posts
        });
      })
      .then(this.loadPosts())
      .catch(error => {
        Dispatcher.dispatch({
          type: 'POST_CREATED',
          err: error,
          payload: null
        });
      });
  },

  deletePost ( postId ) {
    ApiOps
      .delete( '', '', '/posts', postId )
      .then( posts => {
        Dispatcher.dispatch({
          type: 'POST_DELETED',
          err: null,
          payload: posts
        });
      })
      .then(this.loadPosts())
      .catch( error => {
        Dispatcher.dispatch({
          type: 'POST_DELETED',
          err: error,
          payload: null
        });
      });
  },

  updatePost( payload ) {
    ApiOps
      .put( '', '', '/posts/',  payload )
      .then( posts => {
        Dispatcher.dispatch({
          type: 'POST_UPDATED',
          err: null,
          payload: posts,
        });
      })
      .then(this.loadPosts())
      .catch( error => {
        Dispatcher.dispatch({
          type: 'POST_UPDATED',
          err: error,
          payload: null
        });
      });
  }
}

export default DataOps;
