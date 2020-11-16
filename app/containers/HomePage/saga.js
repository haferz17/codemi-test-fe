/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS, FETCH_ACTIVE_DATA, FETCH_ACTIVE_DATA_SUCCESS, FETCH_ACTIVE_DATA_ERROR } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getActiveData() {
  // Select username from store
  const reqTotal = `https://covid19.mathdro.id/api/countries/USA`;
  const reqDetail = `https://covid19.mathdro.id/api/countries/USA/confirmed`;

  try {
    // Call our request helper (see 'utils/request')
    const resTotal = yield fetch(reqTotal).then(res => {
      if (res.status === 200) {
        return res.json()
      }
    })
    const resDetail = yield fetch(reqDetail).then(res => {
      if (res.status === 200) {
        return res.json()
      }
    })
    const detail = resDetail.slice(0, 20).map(item => {
      const percentage = Math.round(item.confirmed / resTotal.confirmed.value * 100)
      return {
        uid: item.uid,
        province: item.provinceState,
        confirmed: item.confirmed,
        percentage: `${percentage}%`
      }
    })
    const data = {
      total: resTotal.confirmed.value,
      data: detail
    }
    console.log("resss111", data)
    yield put({ type: FETCH_ACTIVE_DATA_SUCCESS, data });
  } catch (err) {
    console.log("error", err)
    yield put({ type: FETCH_ACTIVE_DATA_ERROR });
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(FETCH_ACTIVE_DATA, getActiveData);
}
