/*eslint-disable*/
import { Button, message } from 'antd';
import React, { useState } from 'react';
import InputField from '../../Components/InputField';
import { RightSection } from '../../Components/Wrapper';
import { getReqBodyFromConfig, validateInfoForm } from './helper';
import style from './style.module.scss';
import RightImage from '../../../public/img/details.png';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const FormConfig = {
  firstName: {
    value: '',
    error: '',
  },
  lastName: {
    value: '',
    error: '',
  },
  phone: {
    value: '',
    error: '',
  },
};

export function InfoFormLeft({ nextButton, submitUserInfo }) {
  const history = useHistory();
  const params = useParams();
  const [formConfig, setFormConfig] = useState(Object.assign({}, FormConfig));
  const [isTouched, setTouched] = useState(false);
  const [apiInfo, setApiInfo] = useState({ error: false, loading: false });

  const { firstName, lastName, email, phone } = formConfig;

  const onSubmit = async (cb) => {
    setTouched(true);
    const { isValid, formConfig: config } = validateInfoForm(formConfig);
    const body = getReqBodyFromConfig(formConfig);
    const { success, error } = await submitUserInfo(body);
    if (success) {
      location.href = '/teletalk/activation?phone=' + body.phone;
    } else if (error) {
      message.error(error, 5);
    } else {
      message.error(
        'We are experiencing technical difficulties, please try again later!',
        5
      );
    }
  };

  const inputChange = ({ id, target }) => {
    let config = formConfig;
    if (id === 'phone' && target.value === '+88') {
      config[id].value = '+88 ';
    } else {
      config[id].value = target.value;
    }
    if (isTouched) config = validateInfoForm(config).formConfig;
    setFormConfig({ ...config });
  };
  return (
    <React.Fragment>
      <form>
        <ul className={style.formsBlock__list}>
          <li>
            <InputField
              htmlForName="text"
              placeholderLabel="First Name"
              type="text"
              id="firstName"
              onChange={inputChange}
              value={firstName.value}
              error={firstName.error}
              required
            />
          </li>
          <li>
            <InputField
              htmlForName="text"
              placeholderLabel="Last Name"
              type="text"
              id="lastName"
              onChange={inputChange}
              value={lastName.value}
              error={lastName.error}
              required
            />
          </li>
          <li>
            <InputField
              htmlForName="tel"
              placeholderLabel="Phone"
              type="tel"
              id="phone"
              onChange={inputChange}
              onFocus={() => {
                !phone.value &&
                  setFormConfig((state) => ({
                    ...state,
                    phone: { value: '+88 ' }, //space is important
                  }));
              }}
              value={phone.value}
              error={phone.error}
              required
            />
          </li>
          {/* <li>
            <InputField
              htmlForName="email"
              placeholderLabel="Email"
              type="text"
              id="email"
              onChange={inputChange}
              value={email.value}
              error={email.error}
              required
            />
          </li> */}
        </ul>
      </form>
      <div className={style.controlButtons}>
        {nextButton({ onClick: onSubmit, loading: apiInfo.loading })}
      </div>
    </React.Fragment>
  );
}

export function InfoFormRight({ config: { image } }) {
  return (
    <RightSection
      contentimage={RightImage}
      contentText={'Enter your details'}
      showGetStarted={false}
    />
  );
}
