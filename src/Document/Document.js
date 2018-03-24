import React, { createElement } from 'react';
import { propTypes, defaultProps } from './prop-types';
import connect from './store';

import {
  isDocTargetChanged,
  isFetchFinish,
  isLoading,
  isDeleteFinish,
  isUpdateFinish,
  isCreateFinish,
  isDocumentParamsChanged,
  removeLocalKeys
} from '../helpers';

class FetchDocument extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.updateField = this.updateField.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.onPost = this.onPost.bind(this);
    this.onPut = this.onPut.bind(this);
    this.cleanData = this.cleanData.bind(this);
  }

  componentWillMount() {
    const { localFirst, fetchData, objectId } = this.props;
    if (objectId && (!localFirst || (localFirst && !fetchData))) {
      this.fetchData();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (isDocumentParamsChanged(this.props, nextProps)) {
      if (isDocTargetChanged(this.props, nextProps)) {
        this.cleanData();
      }
      this.fetchData(nextProps);
    }
    this.handleCallBacks(this.props, nextProps);
  }

  componentWillUnmount() {
    this.isUnmounted
    if (this.props.leaveClean) {
      this.cleanData();
    }
  }

  onDelete() {
    const { objectId, schemaName, targetName } = this.props;
    this.props.fetchActions.deleteDocument(targetName, schemaName, objectId);
  }

  onRefresh() {
    this.fetchData(this.props, false);
  }

  onPut(dataFromCall) {
    const {
      fetchActions,
      targetName,
      schemaName,
      fetchData,
      objectId,
      parseDataBeforeSubmit
    } = this.props;
    const dataToUpdate = dataFromCall || fetchData;
    const target = targetName || objectId;
    const dataToSend = parseDataBeforeSubmit
      ? parseDataBeforeSubmit(dataToUpdate)
      : dataToUpdate;
    fetchActions.putDoc({
      targetName: target,
      schemaName,
      data: dataToSend,
      objectId
    });
  }

  onPost(dataFromCall) {
    const {
      fetchActions,
      targetName,
      schemaName,
      fetchData,
      objectId,
      uniqueId,
      parseDataBeforeSubmit
    } = this.props;
    const target = targetName || (objectId || uniqueId);
    const dataToCrate = dataFromCall || fetchData;
    const dataToSend = parseDataBeforeSubmit
      ? parseDataBeforeSubmit(dataToCrate)
      : dataToCrate;
    fetchActions.postDoc({ targetName: target, schemaName, data: dataToSend });
  }

  fetchData(props = this.props, localOnly = this.props.localOnly) {
    const { targetName, schemaName, objectId, include, keys } = props;
    if (localOnly || !objectId || !schemaName) {
      return;
    }
    this.props.fetchActions.fetchData({
      targetName,
      schemaName,
      objectId,
      include,
      keys
    });
  }

  updateField(key, value) {
    const { targetName, objectId, uniqueId } = this.props;
    const target = targetName || (objectId || uniqueId);
    this.props.fetchActions.updateField({ targetName: target, key, value });
  }

  handleCallBacks(props, nextProps) {
    const { fetchStatus, fetchData, fetchInfo, fetchError, autoRefresh } = nextProps;
    if (isFetchFinish(props, nextProps)) {
      props.onFetchEnd(fetchError, { fetchStatus, fetchData, fetchInfo });
    } else if (isDeleteFinish(props, nextProps)) {
      if (autoRefresh) this.fetchData(nextProps);
      props.onDeleteEnd(fetchError, { fetchStatus, fetchData, fetchInfo });
    } else if (isUpdateFinish(props, nextProps)) {
      if (autoRefresh) this.fetchData(nextProps);
      props.onPutEnd(fetchError, { fetchStatus, fetchData, fetchInfo });
    } else if (isCreateFinish(props, nextProps)) {
      if (autoRefresh) this.fetchData(nextProps);
      props.onPostEnd(fetchError, { fetchStatus, fetchData, fetchInfo });
    }
  }

  cleanData() {
    const { targetName, objectId, uniqueId } = this.props;
    const target = targetName || (objectId || uniqueId);
    this.props.fetchActions.cleanData(target);
  }

  render() {
    const { fetchData, fetchStatus, fetchInfo, fetchError, component, objectId } = this.props;
    let props = removeLocalKeys(this.props);
    let propsToPass  = Object.assign(props, {
      fetchProps: {
      data: fetchData,
      fetchError: fetchError,
      status: fetchStatus,
      info: fetchInfo,
      isLoading: isLoading(fetchStatus),
      refresh: this.onRefresh,
      deleteDoc: this.onDelete,
      put: objectId && this.onPut,
      post: this.onPost,
      cleanData: this.cleanData,
      }
    })
    if(component){
      return createElement(component, propsToPass)
    }
    return this.props.render(propsToPass);
  }
}

FetchDocument.propTypes = propTypes;
FetchDocument.defaultProps = defaultProps;
export default connect(FetchDocument);
