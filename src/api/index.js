/*eslint-disable */
import axios from 'axios';
const API_BASE_URL = 'https://bd.haigreve.com/api';
const SUBSCRIPTION_PLAN_URL = API_BASE_URL + '/subscriptionPlans';
const SAVE_CUSTOMER_URL = API_BASE_URL + '/saveCustomerDetails';
const CONFIRM_SUBSCRIPTION_URL = API_BASE_URL + '/confirmSubscription'; //added confirmation url -- joel
const CHECK_SUBSCRIPTION_STATUS = API_BASE_URL + '/checkSubscriptionStatus'; // aded subscription check url -- joel
const ACTIVATE_SUBSCRIPTION_URL = API_BASE_URL + '/activateSubscription'; // added activateSubscription url -- joel

export const submitUserPlanInfo = async (data) => {
  // const payload = {
  //   firstName: data.firstName,
  //   lastName: data.lastName,
  //   email: data.email,
  //   phoneNo: data.phone,
  //   subscriptionPlan: data.plan,
  //   duration_month: 1,
  //   payment_status: 'success',
  // };
  // payload for confirmation url
  const confirmPayload = {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone_number: data.phone,
  };
  try {
    // await sleep(1000);
    // await axios.post(SAVE_CUSTOMER_URL, payload);
    //confirmation url call
    const response = await axios.post(CONFIRM_SUBSCRIPTION_URL, confirmPayload); // {"confirmation_link": ""}
    return { success: true, confirmUrl: response.data['confirmation_link'] };
  } catch {
    return { success: false };
  }
};

export const getAvailablePlans = async () => {
  try {
    // await sleep();
    // const data = DUMMY_DATA;
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

export const activateSubscription = async (phone) => {
  try {
    const response = await axios(ACTIVATE_SUBSCRIPTION_URL, {
      phone,
    });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false };
  }
};
