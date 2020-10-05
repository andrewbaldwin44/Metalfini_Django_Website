import { takeEvery, call, put } from 'redux-saga/effects';
import { getProducts } from '../utils/index';

function* handleProducts() {
  const productData = yield call(getProducts);

  yield put({
    type: 'PRODUCTS',
    productData,
  });
}

export function* watchServerRequests() {
  yield takeEvery('REQUEST_PRODUCTS', handleProducts);
}
