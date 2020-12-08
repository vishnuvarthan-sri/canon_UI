import axios from 'axios';
import * as FileSaver from 'file-saver';
// import { template } from 'underscore';
import * as types from './types';

export const fetchCannonTemplatesAction = () => {
    
    return function(dispatch) {
        axios
            .get(types.API_URL + '/auditor/v1/canon/getTemplates')
            .then(function(response) {
                
                dispatch({
                    type: types.FETCH_CANNON_TEMPLATE_SUCCESS_ACTION,
                    payload: response.data
                });
            })
            .catch(function(error) {
                dispatch({
                    type: types.FETCH_CANNON_TEMPLATE_FAILURE_ACTION,
                    payload: error
                });
            });
    };
};




export const fetchCannonStoreAction = ({templateId,onSuccess,onFailure}) => {
    return function(dispatch) {
        axios
            .get(types.API_URL + `/auditor/v1/canon/getStores?templateId=${templateId}`)
            .then(function(response) {
                dispatch({
                    type: types.FETCH_CANNON_STORE_SUCCESS_ACTION,
                    payload: response.data
                });
                onSuccess()
            })
            .catch(function(error) {
                dispatch({
                    type: types.FETCH_CANNON_STORE_FAILURE_ACTION,
                    payload: error
                });
                onFailure()
            });
    };
};

export const fetchCannonProductAction = ({templateId,storeId,onSuccess,onFailure}) => {
    
    return function(dispatch) {
        axios
            .get(types.API_URL + `/auditor/v1/canon/getProducts?templateId=${templateId}&storeId=${storeId}`)
            .then(function(response) {
                
                dispatch({
                    type: types.FETCH_CANNON_PRODUCT_SUCCESS_ACTION,
                    payload: response.data
                });
                onSuccess(response)
            })
            .catch(function(error) {
                dispatch({
                    type: types.FETCH_CANNON_PRODUCT_FAILURE_ACTION,
                    payload: error
                });
                onFailure()
            });
    };
};
export const fetchAuditorsAction = () => {
    
    return function(dispatch) {
        axios
            .get(types.API_URL + '/auditor/v1/canon/auditors')
            .then(function(response) {
                
                dispatch({
                    type: types.FETCH_AUDITORS_SUCCESS_ACTION,
                    payload: response.data
                });
            })
            .catch(function(error) {
                dispatch({
                    type: types.FETCH_AUDITORS_FAILURE_ACTION,
                    payload: error
                });
            });
    };
};
export const AssignCannonAuditsAction = ({data,onSuccess,onFailure}) => {
    return function (dispatch) {
      axios
        .post(types.API_URL + '/auditor/v1/canon/assignAudits',data)
        .then(function (response) {
          dispatch({
            type: types.ASSIGN_CANNON_AUDITS_SUCCESS_ACTION,
            payload: response.data
          });
          onSuccess()
        })
        .catch(function (error) {
          dispatch({
            type: types.ASSIGN_CANNON_AUDITS_FAILURE_ACTION,
            payload: error
          });
        });
    };
  };
