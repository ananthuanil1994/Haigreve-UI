/*eslint-disable*/

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^(\+88)?01(\d){9}$/;
    return phone.match(re);
}


export const validateInfoForm = (formConfig) => {
    const { name, email, phone } = formConfig;
    let isValid = true;

    if (!name.value.trim()) {
        isValid = false;
        name.error = 'Name is required';
    } else name.error = '';

    if (!email.value.trim()) {
        isValid = false;
        email.error = 'Email is required';
    } else if (!validateEmail(email.value.trim())) {
        isValid = false;
        email.error = 'Email is not valid';
    } else email.error = '';

    if (!phone.value.trim()) {
        isValid = false;
        phone.error = 'Phone number is required';
    } else if (!validatePhone(phone.value.trim())) {
        isValid = false;
        phone.error = 'Phone number is not valid';
    } else phone.error = '';
    return {
        formConfig,
        isValid
    };
};

export const getReqBodyFromConfig = (formConfig) => {
    const obj = {};
    Object.keys(formConfig).map(field => {
        obj[field] = formConfig[field].value;
    });
    return obj;
};