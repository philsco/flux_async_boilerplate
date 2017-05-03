
import AppViews from '../views/AppViews';
import { Container } from 'flux/utils';
import Actions from '../Actions';
import Store from '../data/Store';
import PostDraftStore from '../data/PostDraftStore';

function getStores() {
  return [
    Store,
    PostDraftStore
  ];
}

function getState() {
  return {
    app: Store.getState(),
    draft: PostDraftStore.getState(),

    onUpdateData: Actions.updateData,
    onCreatePost: Actions.createPost,
    onDeletePost: Actions.deletePost
  };
}

export default Container.createFunctional(AppViews, getStores, getState);