import axios from 'axios';
const API_BASE_URL = 'http://localhost:5000';
const SUBSCRIPTION_PLAN_URL = API_BASE_URL + '/subscriptionPlans';
const SAVE_CUSTOMER_URL = API_BASE_URL + '/saveCustomerDetails';

const DUMMY_DATA = [{
    planName: '1 Month License',
    amount: '80',
    id: 1
},
{
    planName: '3 Month License',
    amount: '240',
    id: 2
},
{
    planName: '6 Month License',
    amount: '480',
    id: 3
},
{
    planName: '1 Year License',
    amount: '960',
    id: 4
}];

export const submitUserPlanInfo = async (data) => {
    const payload = {
        name: data.name,
        email: data.email,
        phone_no: data.phone,
        subscription_plan: data.plan
    };
    try {
        // await sleep(1000);
        await axios.post(SUBSCRIPTION_PLAN_URL, payload);

        return { success: true };
    } catch {
        return { success: false };
    }
};

export const getAvailablePlans = async () => {
    try {
        // await sleep();
        // const data = DUMMY_DATA;
        const { data } = await axios.get(SAVE_CUSTOMER_URL);

        return {
            success: true,
            data
        };
    } catch {
        return { success: false };
    }
};


const sleep = (duration = 1000) => {
    return new Promise(res => {
        return setTimeout(() => {
            res();
        }, duration);
    });
};