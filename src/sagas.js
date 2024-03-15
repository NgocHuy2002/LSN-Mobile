import authSaga from '@containers/Auth/saga/saga';
import postsSaga from '@containers/HomeScreen/saga/saga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    authSaga(),
    postsSaga(),
  ]);
}
