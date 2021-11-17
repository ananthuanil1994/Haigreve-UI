/* eslint-disable no-console */
import { APIInstance } from './apiInstance';

export const instance = new APIInstance({
  baseURL: 'http://34.122.176.96:8000/creators/_search',
});

const api = instance.api;

export const getSearchResults = async (payload) => {
  const formData = new FormData();
  Object.keys(payload).forEach((key) => {
    formData.append(key, payload[key]);
  });
  try {
    let response = await api.post(null, formData);
    return response.data;
  } catch (err) {
    return err;
  }
};

// keyword: mukbang
// filters[]: country = US
// order:
// exact_match_opt: false
// offset: 0
// action: click
// page: search_main
// target: search_button
