export default {
  GET_START: 'GET_START',
  GET_FAILED: 'GET_FAILED',
  GET_FAILED_NETWORK: 'GET_FAILED_NETWORK',
  GET_FINISHED: 'GET_FINISHED',
  CREATE_START: 'CREATE_START',
  CREATE_FAILED: 'CREATE_FAILED',
  CREATE_FAILED_NETWORK: 'CREATE_FAILED_NETWORK',
  CREATE_FINISHED: 'CREATE_FINISHED',
  DELETE_START: 'DELETE_START',
  DELETE_FAILED: 'DELETE_FAILED',
  DELETE_FAILED_NETWORK: 'DELETE_FAILED_NETWORK',
  DELETE_FINISHED: 'DELETE_FINISHED',
  UPDATE_START: 'UPDATE_START',
  UPDATE_FAILED: 'UPDATE_FAILED',
  UPDATE_FAILED_NETWORK: 'UPDATE_FAILED_NETWORK',
  UPDATE_FINISHED: 'UPDATE_FINISHED',
  // OLD
  // DATA
  LOG_OUT: '_LOG_OUT',
  data: '_data',
  INVALID_SESSION_TOKEN: '_INVALID_SESSION_TOKEN',
  // Collection
  GET_COLLECTION: '_GET_COLLECTION',
  SET_COLLECTION_BY_TARGET_NAME: '_SET_COLLECTION_BY_TARGET_NAME',
  DELETE_DOCUMENT_FROM_COLLECTION: '_DELETE_DOCUMENT_FROM_COLLECTION',
  UPDATE_DOCUMENT_FROM_COLLECTION: '_UPDATE_DOCUMENT_FROM_COLLECTION',
  CLEAR_COLLECTIONS: '_CLEAR_COLLECTIONS',
  SET_COLLECTION_STATUS: '_SET_COLLECTION_STATUS',
  CLEAR_COLLECTION: '_CLEAR_COLLECTION',
  SET_COLLECTION: '_SET_COLLECTION',
  DELETE_DOCUMENT_FROM_COLLECTION_START:
    '_DELETE_DOCUMENT_FROM_COLLECTION_START',
  DELETE_DOCUMENT_FROM_COLLECTION_FAILED:
    '_DELETE_DOCUMENT_FROM_COLLECTION_FAILED',
  DELETE_DOCUMENT_FROM_COLLECTION_FINISHED:
    '_DELETE_DOCUMENT_FROM_COLLECTION_FINISHED',
  UPDATE_DOCUMENT_FROM_COLLECTION_START:
    '_UPDATE_DOCUMENT_FROM_COLLECTION_START',
  UPDATE_DOCUMENT_FROM_COLLECTION_FAILED:
    '_UPDATE_DOCUMENT_FROM_COLLECTION_FAILED',
  UPDATE_DOCUMENT_FROM_COLLECTION_FINISHED:
    '_UPDATE_DOCUMENT_FROM_COLLECTION_FINISHED',
  // Document
  GET_DOCUMENT: '_GET_DOCUMENT',
  SET_DOCUMENT: '_SET_DOCUMENT',
  CLEAR_DOCUMENTS: '_CLEAR_DOCUMENTS',
  SET_DOCUMENTS_PARAMETERS: '_SET_DOCUMENTS_PARAMETERS',
  SET_SET_DOCUMENT_STATUS: '_SET_SET_DOCUMENT_STATUS',
  UPDATE__DOCUMENT_ON_STORE: '_UPDATE__DOCUMENT_ON_STORE',
  REMOVE_DOCUMENT: '_REMOVE_DOCUMENT',
  UPDATE_DOCUMENT_ON_SERVER: 'UPDATE_DOCUMENT_ON_SERVER',
  DELETE_DOCUMENT: 'DELETE_DOCUMENT_FROM_SERVER',
  // New Document
  CREATE_NEW_DOCUMENT: '_CREATE_NEW_DOCUMENT',
  UPDATE_NEW_DOCUMENT: '_UPDATE_NEW_DOCUMENT',
  REMOVE_NEW_DOCUMENT: '_REMOVE_NEW_DOCUMENT',
  CLEAR_NEW_DOCUMENT: '_CLEAR_NEW_DOCUMENT',
  POST_NEW_DOCUMENT: '_POST_NEW_DOCUMENT',
  SET_NEW_DOCUMENT_STATUS: '_SET_NEW_DOCUMENT_STATUS',
  // Cloud codes
  GET_CLOUD_CODE: '_GET_DATA_BY_CLOUD_CODE_NAME',
  CLEAR_ALL_CLOUD_CODES: '_CLEAR_ALL_CLOUD_CODES',
  SET_CLOUD_CODE: '_SET_CLOUD_CODE_BY_TARGET_NAME',
  SET_CLOUD_CODE_REQUEST_STATUS:
    'SET_CLOUD_CODE_REQUEST_STATUS',
  SET_CLOUD_CODE_PARAMETERS: '_SET_CLOUD_CODE_PARAMETERS',
  REMOVE_CLOUD_CODE:
    'REMOVE_CLOUD_CODE',
  // AUTH
  SESSION_TOKEN_KEY: '_SESSION_TOKEN_KEY',
  GET_SESSION_TOKEN_FROM_STORAGE: '_GET_SESSION_TOKEN_FROM_STORAGE',
  SET_SESSION_TOKEN_IN_STORAGE: '_SET_SESSION_TOKEN_IN_STORAGE',
  REMOVE_SESSION_TOKEN_FROM_STORAGE: '_REMOVE_SESSION_TOKEN_FROM_STORAGE',
  SESSION_TOKEN_IN_STORAGE_STATUS: '_SESSION_TOKEN_IN_STORAGE_STATUS',
  // -- get statues
  GET_SESSION_START: '_GET_SESSION_START',
  GET_SESSION_SUCCESSFULLY: '_GET_SESSION_SUCCESSFULLY',
  GET_SESSION_FAILED: '_GET_SESSION_FAILED',
  // -- set statues
  SET_SESSION_START: '_SET_SESSION_START',
  SET_SESSION_SUCCESSFULLY: '_SET_SESSION_SUCCESSFULLY',
  SET_SESSION_FAILED: '_SET_SESSION_FAILED',
  // -- remove statues
  REMOVE_SESSION_START: '_REMOVE_SESSION_START',
  REMOVE_SESSION_SUCCESSFULLY: '_REMOVE_SESSION_SUCCESSFULLY',
  REMOVE_SESSION_FAILED: '_REMOVE_SESSION_FAILED',
  // store
  SET_USER_IN_STORE: '_SET_USER_IN_STORE',
  CLEAR_USER_FROM_STORE: '_CLEAR_USER_FROM_STORE',
  CLEAR_AUTH_FORM: '_CLEAR_AUTH_FORM',
  SET_VALUE_IN_AUTH_FORM_BY_KEY: '_SET_VALUE_IN_AUTH_FORM_BY_KEY',
  // query status
  SET_AUTH_QUERY_STATUS: '_SET_AUTH_QUERY_STATUS',
  // -- register
  REGISTER_START: '_REGISTER_START',
  REGISTER_SUCCESSFULLY: '_REGISTER_SUCCESSFULLY',
  REGISTER_FAILED: '_REGISTER_FAILED',
  // -- login
  LOGIN_START: '_LOGIN_START',
  LOGIN_SUCCESSFULLY: '_LOGIN_SUCCESSFULLY',
  LOGIN_FAILED: '_LOGIN_FAILED',
  // -- logout
  LOGOUT_START: '_LOGOUT_START',
  LOGOUT_FAILED: '_LOGOUT_FAILED',
  LOGOUT_SUCCESSFULLY: '_LOGOUT_SUCCESSFULLY',
  // auth types
  AUTH_LOGIN: '_AUTH_LOGIN',
  AUTH_REGISTER: '_AUTH_REGISTER',
  AUTH_LOGOUT: '_AUTH_LOGOUT',
  // parse
  SUCCESS: '_SUCCESS',
  SUCCESS_WITH_ZERO_RESULTS: '_SUCCESS_WITH_ZERO_RESULTS',
  ERROR: '_ERROR',
  LOADING: '_LOADING',
  NETWORK_ERROR: '_NETWORK_ERROR',
  LOGIN: '_LOGIN',
};
