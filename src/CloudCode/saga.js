import regeneratorRuntime from 'regenerator-runtime';
import { put } from 'redux-saga/effects';
import httpRequest from '../server/httpWrapper';
import types from '../types';
import Api from '../server/api';
import { dig } from '../helpers';
import { setOnStore } from './actions';
import Logger from '../server/Logger';

const START = types.FETCH_START;
const FAILED = types.FETCH_FAILED;
const FAILED_NETWORK = types.FETCH_FAILED_NETWORK;
const FINISHED = types.FETCH_FINISHED;

export default function* fetchCloudCode(action) {
  const { functionName, targetName, params, digToData } = action.payload;
  const target = targetName || functionName;
  yield put(setOnStore({ targetName: target, status: START, error: null, loading: true }));
  const res = yield httpRequest(Api.getCloudFunction, functionName, params);
  if (res.error || dig(res, 'response.data.error')) {
    const errType = res.message === 'Network Error' ? FAILED_NETWORK : FAILED;
    yield put(setOnStore({ targetName: target, status: errType, error: res,  loading: false }));
    console.error('getCloudFunction err: ', functionName, res.error);
    Logger.onError('CLOUD_CODE', action, errType);
  } else {
    const data = dig(res, digToData);
    yield put(
      setOnStore({
        targetName: target,
        status: FINISHED,
        error: null,
        data,
        info: {
          params,
          timestamp: Date.now()
        },
        loading: false
      })
    );
    Logger.onSuccses('CLOUD_CODE', action, FINISHED);
  }
}
/* eslint no-unused-vars: "off" */
