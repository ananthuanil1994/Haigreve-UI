import axios from 'axios';
const API_BASE_URL = 'https://bd.haigreve.com/api';
const SUBSCRIPTION_PLAN_URL = API_BASE_URL + '/subscriptionPlans';
const SAVE_CUSTOMER_URL = API_BASE_URL + '/saveCustomerDetails';
const CONFIRM_SUBSCRIPTION_URL = API_BASE_URL + '/confirmSubscription'; //added confirmation url

const DUMMY_DATA = [
  {
    planName: '1 Month License',
    amount: '80',
    id: 1,
  },
  {
    planName: '3 Month License',
    amount: '240',
    id: 2,
  },
  {
    planName: '6 Month License',
    amount: '480',
    id: 3,
  },
  {
    planName: '1 Year License',
    amount: '960',
    id: 4,
  },
];

export const submitUserPlanInfo = async (data) => {
  const payload = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNo: data.phone,
    subscriptionPlan: data.plan,
  };
  // payload for confirmation url
  const confirmPayload = {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone_number: data.phone,
  };
  try {
    // await sleep(1000);
    await axios.post(SAVE_CUSTOMER_URL, payload);
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

const sleep = (duration = 1000) => {
  return new Promise((res) => {
    return setTimeout(() => {
      res();
    }, duration);
  });
};
