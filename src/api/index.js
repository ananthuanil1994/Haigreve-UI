/*eslint-disable */
import axios from 'axios';
const API_BASE_URL = 'https://bd.haigreve.com/api';
const SUBSCRIPTION_PLAN_URL = API_BASE_URL + '/subscriptionPlans';
const SAVE_CUSTOMER_URL = API_BASE_URL + '/saveCustomerDetails';
const CONFIRM_SUBSCRIPTION_URL = API_BASE_URL + '/confirmSubscription'; //added confirmation url -- joel
const CHECK_SUBSCRIPTION_STATUS = API_BASE_URL + '/checkSubscriptionStatus'; // aded subscription check url -- joel
const ACTIVATE_SUBSCRIPTION_URL = API_BASE_URL + '/activateSubscription'; // added activateSubscription url -- joel

export const submitUserPlanInfo = async (data, provider) => {
  console.log(provider);
  const payload = {
    first_name: data.firstName,
    last_name: data.lastName,
    // email: data.email,
    phone_number: data.phone,
    provider: 'teletalk',
  };
  try {
    const log = await axios.post(SAVE_CUSTOMER_URL, {
      ...payload,
      subscription_plan: 1,
    });
    console.log(log);
    // if (!log.email) {
    //   return { success: false, error: log.message };
    // }
    const response = await axios.post(CONFIRM_SUBSCRIPTION_URL, payload); // {"confirmation_link": ""}
    return { success: true, confirmUrl: response.data['confirmation_link'] };
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

export const checkSubscriptionStatus = async (phone_no) => {
  const phone_number = phone_no.value.replace('+88 ', '88');
  try {
    const response = await axios.post(CHECK_SUBSCRIPTION_STATUS, {
      phone_number,
    });
    return response.data['subscription_status'];
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

const sleep = (duration = 1000) => {
  return new Promise((res) => {
    return setTimeout(() => {
      res();
    }, duration);
  });
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
