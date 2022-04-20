/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import Wrapper, { RightSection } from '../../Components/Wrapper';
import subscriptionImage from '../../../public/img/subscription.png';
import { Button } from 'antd';
import { useLocation } from 'react-router-dom';
import { submitUserPlanInfo } from '../../api';
import { getReqBodyFromConfig } from '../Home/helper';
import { PROVIDERS } from '../../constants';

export function Subscription() {
  const location = useLocation();
  const { data, provider } = location.state;
  const { smsNumber, smsBody, content } = PROVIDERS[provider];
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    const { success, confirmUrl, error } = await submitUserPlanInfo(
      getReqBodyFromConfig(data)
    );
    if (success) {
      setLoading(false);
      window.location.href = `sms:${smsNumber}?body=${encodeURIComponent(
        smsBody
      )}`;
      window.location.href = confirmUrl;
    } else if (error) {
      message.error(error, 5);
    } else {
      message.error(
        'We are experiencing technical difficulties, please try again later!',
        5
      );
    }
  };
  return (
    <Wrapper
      left={
        <SubscriptionLeft
          handleClick={handleClick}
          loading={loading}
          content={content}
        />
      }
      right={<SubscriptionRight />}
      image={subscriptionImage}
    />
  );
}

function getContent(content) {
  return (
    <div>
      {content.split('-').map((t) => (
        <p>{t}</p>
      ))}
    </div>
  );
}

function SubscriptionLeft(props) {
  return (
    <div className={style.subscription}>
      {getContent(props.content)}
      <Button
        className={style.subscribeBtn}
        onClick={() => props.handleClick()}
        loading={props.loading}
      >
        Subscribe
      </Button>
    </div>
  );
}

function SubscriptionRight() {
  return (
    <RightSection
      contentimage={subscriptionImage}
      contentText={'Subscribe'}
      showGetStarted={false}
      link={false}
    />
  );
}
