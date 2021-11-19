import { instance as Login } from './login';
import { instance as Users } from './users';

export const Instances = [Login, Users];

export const submitUserPlanInfo = async (data) => {
    const payload = {
        name: data.name,
        email: data.email,
        phone_no: data.phone,
        subscription_plan: data.plan
    };
    try {
        await sleep(1000);
        return { success: true };
    } catch {
        return { success: true };
    }
};
export const getAvailablePlans = async () => {
    try {
        await sleep();
        return {
            success: true,
            data: [{
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
            }]
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