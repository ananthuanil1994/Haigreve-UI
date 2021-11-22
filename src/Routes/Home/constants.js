import Plan1 from '../../../public/img/plan1.png';
import Plan2 from '../../../public/img/plan1.png';
import Plan3 from '../../../public/img/plan1.png';
import Plan4 from '../../../public/img/plan1.png';

const tabs = {
    choosePlan: 'choosePlan',
    infoForm: 'infoForm',
    payment: 'payment',
    success: 'success'
};
export default {
    tabs,
    errorMessage: 'We are experiencing technical difficulties, please try again later!',
    pageConfig: {
        [tabs.choosePlan]: {
            id: 1,
            name: tabs.choosePlan,
            image: Plan1
        },
        [tabs.infoForm]: {
            id: 2,
            name: tabs.infoForm,
            image: Plan2
        },
        [tabs.payment]: {
            id: 3,
            name: tabs.payment,
            image: Plan3
        },
        [tabs.success]: {
            id: 4,
            name: tabs.success,
            image: Plan4
        },
    }
};