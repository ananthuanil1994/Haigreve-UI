/*eslint-disable*/
import { message } from 'antd';
import React, { useState } from 'react';
import InputField from '../../Components/InputField';
import { RightSection } from '../../Components/Wrapper';
import { getReqBodyFromConfig, validateInfoForm } from './helper';
import style from './style.module.scss';
import RightImage from '../../../public/img/details.png';

const FormConfig = {
  email: {
    value: '',
    error: '',
  },
  name: {
    value: '',
    error: '',
  },
  phone: {
    value: '',
    error: '',
  },
};

export function InfoFormLeft({ nextButton, submitUserInfo }) {
  const [formConfig, setFormConfig] = useState(Object.assign({}, FormConfig));
  const [isTouched, setTouched] = useState(false);
  const [apiInfo, setApiInfo] = useState({ error: false, loading: false });

  const { email, phone, name } = formConfig;

  const onSubmit = async (cb) => {
    setTouched(true);
    const { isValid, formConfig: config } = validateInfoForm(formConfig);
    setFormConfig({ ...config });
    if (isValid) {
      setApiInfo({ loading: true });
      const { success } = await submitUserInfo(
        getReqBodyFromConfig(formConfig)
      );
      setApiInfo({ error: !success });
      if (success) cb?.();
      else
        message.error(
          'We are experiencing technical difficulties, please try again later!',
          5
        );
    }
  };

  const inputChange = ({ id, target }) => {
    let config = formConfig;
    config[id].value = target.value;
    if (isTouched) config = validateInfoForm(config).formConfig;
    setFormConfig({ ...config });
  };

  return (
    <React.Fragment>
      <form>
        <ul className={style.formsBlock__list}>
          <li>
            <InputField
              htmlForName='text'
              placeholderLabel='Name'
              type='text'
              id='name'
              onChange={inputChange}
              value={name.value}
              error={name.error}
              required
            />
          </li>
          <li>
            <InputField
              htmlForName='tel'
              placeholderLabel='Phone'
              type='tel'
              id='phone'
              onChange={inputChange}
              value={phone.value}
              error={phone.error}
              required
            />
          </li>
          <li>
            <InputField
              htmlForName='email'
              placeholderLabel='Email'
              type='text'
              id='email'
              onChange={inputChange}
              value={email.value}
              error={email.error}
              required
            />
          </li>
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
