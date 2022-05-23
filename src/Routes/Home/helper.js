/*eslint-disable*/

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePhone(phone,provider) {
  // +8801534983669 for Teletalk and Robi
  // 576829252796607250 for grameenphone
  var re;
  if(provider != 'grameenphone'){
    re = /^(\+88 )?01(\d){9}$/;
  } else {
    re = /^(\d){18}$/;
  }
  return phone.match(re);
}

export const validateInfoForm = (formConfig,provider) => {
  const { firstName, lastName, email, phone } = formConfig; //changed config to include firstName and lastName
  let isValid = true;
  // added validation properties for firstName and lastName
  if (!firstName.value.trim()) {
    isValid = false;
    firstName.error = 'First Name is required';
  } else firstName.error = '';

  if (!lastName.value.trim()) {
    isValid = true;
    lastName.error = 'Last Name is required';
  } else lastName.error = '';

  // if (!email.value.trim()) {
  //   isValid = false;
  //   email.error = 'Email is required';
  // } else if (!validateEmail(email.value.trim())) {
  //   isValid = false;
  //   email.error = 'Email is not valid';
  // } else email.error = '';

  if (!phone.value.trim()) {
    isValid = false;
    phone.error = 'Phone number is required';
  } else if (!validatePhone(phone.value.trim(),provider)) {
    isValid = false;
    phone.error = 'Phone number is not valid';
  } else phone.error = '';
  return {
    formConfig,
    isValid,
  };
};

export const getReqBodyFromConfig = (formConfig,provider) => {
  const obj = {};
  Object.keys(formConfig).map((field) => {
    if (field === 'phone'&& provider !== 'grameenphone') {
      obj[field] = formConfig[field].value.replace('+88 ', '+88');
    } else {
      obj[field] = formConfig[field].value;
    }
  });
  return obj;
};
