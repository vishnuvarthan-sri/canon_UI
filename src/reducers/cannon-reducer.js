import {
  FETCH_CANNON_TEMPLATE_SUCCESS_ACTION,
  FETCH_CANNON_TEMPLATE_FAILURE_ACTION,
  FETCH_CANNON_STORE_SUCCESS_ACTION,
  FETCH_CANNON_STORE_FAILURE_ACTION,
  FETCH_AUDITORS_SUCCESS_ACTION,
  FETCH_AUDITORS_FAILURE_ACTION,
  FETCH_CANNON_PRODUCT_SUCCESS_ACTION,
  FETCH_CANNON_PRODUCT_FAILURE_ACTION
} from "../actions/types";

const CANNON_STATE = {};

export default function (state = CANNON_STATE, action) {
  state = Object.assign({}, state, {});
  switch (action.type) {
    case FETCH_CANNON_TEMPLATE_SUCCESS_ACTION:
      state.cannonTemplate = action.payload[0];
      state.cannonTemplateError = false;
      return state;
    case FETCH_CANNON_TEMPLATE_FAILURE_ACTION:
      state.cannonTemplateError = true;
      return state;
    case FETCH_CANNON_STORE_SUCCESS_ACTION:
      state.cannonStoreList = action.payload.store;
      state.cannonStoreError = false;
      return state;
    case FETCH_CANNON_STORE_FAILURE_ACTION:
      state.cannonStoreError = true;
      return state;
    case FETCH_CANNON_PRODUCT_SUCCESS_ACTION:
      console.log(action.payload,"products")
      state.cannonProducts = action.payload.Product;
      state.fetchCannonProductError = false;
      return state;
    case FETCH_CANNON_PRODUCT_FAILURE_ACTION:
      state.fetchCannonProductError = true;
      return state;
    case FETCH_AUDITORS_SUCCESS_ACTION:
      state.cannonAuditors = action.payload.data;
      state.fetchAuditorsError = false;
      return state;
    case FETCH_AUDITORS_FAILURE_ACTION:
      state.fetchAuditorsError = true;
      return state;

  }
  return state;
}
