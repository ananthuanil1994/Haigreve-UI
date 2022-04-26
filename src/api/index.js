/*eslint-disable */
import axios from 'axios';
const API_BASE_URL = 'https://bd.haigreve.com/api';
const SUBSCRIPTION_PLAN_URL = API_BASE_URL + '/subscriptionPlans';
const SAVE_CUSTOMER_URL = API_BASE_URL + '/saveCustomerDetails';
const ACTIVATE_SUBSCRIPTION_URL = API_BASE_URL + '/activateSubscription';

export const submitUserPlanInfo = async (data, provider) => {
  const payload = {
    first_name: data.firstName,
    last_name: data.lastName,
    phone_number: data.phone,
    provider: 'teletalk',
  };
  try {
    const log = await axios.post(SAVE_CUSTOMER_URL, {
      ...payload,
      subscription_plan: 1,
    });
    // if (!log.email) {
    //   return { success: false, error: log.message };
    // }
    return { success: true };
  } catch {
    return { success: false };
  }
};

export const getAvailablePlans = async () => {
  try {
    const { data } = await axios.get(SUBSCRIPTION_PLAN_URL);

    return {
      success: true,
      data,
    };
  } catch {
    return { success: false };
  }
};

export const activateSubscription = async (phone_number) => {
  try {
    const response = await axios.post(ACTIVATE_SUBSCRIPTION_URL, {
      phone_number,
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false };
  }
};
