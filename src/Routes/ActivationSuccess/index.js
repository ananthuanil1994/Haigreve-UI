/*eslint-disable */

import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import Wrapper, { RightSection } from '../../Components/Wrapper';
import RightImage from '../../../public/img/success1.png';
import Loader from '../../Components/Loader';
import Failure from '../../../public/img/sad.png';
import System from '../../../public/img/system.png';
import { useLocation } from 'react-router-dom';
import { activateSubscription } from '../../api';
import { message } from 'antd';
// import RightImage from '../../../public/img/winner.png';
export default function ActivationSuccess(props) {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const phone = searchParams.get('phone');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    if (phone) {
      const response = await activateSubscription(phone);
      if (response.data.url) {
        setStatus(true);
        setLoading(true);
        setTimeout(() => {
          window.location.href = response.data.url;
          setLoading(false);
        }, 3000);
      } else {
        setStatus(false);
      }
    } else {
      message.error('Invalid URL', 5);
    }
  }, []);

  if (status === true) {
    return (
      <Wrapper
        left={<SuccessLeft loading={loading} />}
        right={<SuccessRight />}
        image={RightImage}
      />
    );
  } else if (status === null) {
    return (
      <div className={style.loader}>
        <div className={style.success}>
          <Loader classList={['xl blue']} />
        </div>
      </div>
    );
  } else {
    return (
      <Wrapper
        left={<FailureLeft />}
        right={<FailureRight />}
        image={RightImage}
      />
    );
  }
}

function SuccessLeft({ loading }) {
  return (
    <React.Fragment>
      <div className={style.success}>
        <h3>Your subscription is successfully activated.</h3>
        <img src="..\img\success.png" />
        {loading && <Loader classList={['lg blue']} />}
      </div>
    </React.Fragment>
  );
}

function SuccessRight() {
  return (
    <RightSection
      contentimage={RightImage}
      contentText={'Winner'}
      showGetStarted={false}
    />
  );
}

function FailureLeft() {
  return (
    <React.Fragment>
      <div className={style.success}>
        <h3>Unfortunately, your subscription is not activated.</h3>
        <img src={Failure} style={{ maxWidth: '130px' }} />
      </div>
    </React.Fragment>
  );
}

function FailureRight() {
  return (
    <RightSection
      contentimage={System}
      contentText={'Try again later'}
      showGetStarted={false}
    />
  );
}
