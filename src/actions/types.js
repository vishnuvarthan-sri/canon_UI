import axios from 'axios';
import config from '../config';

export const API_URL = config['api_url'];

axios.defaults.baseURL = API_URL;

  
  
  
export const FETCH_CANNON_TEMPLATE_SUCCESS_ACTION = "cannon_template_succcess_action";
export const FETCH_CANNON_TEMPLATE_FAILURE_ACTION = "cannon_template_failure_action";
export const FETCH_CANNON_STORE_SUCCESS_ACTION = "cannon_store_Success";
export const FETCH_CANNON_STORE_FAILURE_ACTION = "cannon_Store_failure";
export const FETCH_CANNON_PRODUCT_SUCCESS_ACTION = "cannon_product_success";
export const FETCH_CANNON_PRODUCT_FAILURE_ACTION = "cannon_product_failure";
export const SAVE_CANNON_AUDIT_SUCCESS_ACTION = "save_cannon_audit_success";
export const SAVE_CANNON_AUDIT_FAILURE_ACTION = "save_cannon_audit_failure";
export const FETCH_AUDITORS_SUCCESS_ACTION = "auditors_success";
export const FETCH_AUDITORS_FAILURE_ACTION = "auditors_failure";
export const ASSIGN_CANNON_AUDITS_SUCCESS_ACTION = "assign_audits_success";
export const ASSIGN_CANNON_AUDITS_FAILURE_ACTION = "assign_audits_failure";