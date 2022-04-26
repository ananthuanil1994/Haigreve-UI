/*eslint-disable*/
import React, { useState } from 'react';
import style from './style.module.scss';
import Wrapper, { RightSection } from '../../Components/Wrapper';
import subscriptionImage from '../../../public/img/subscription.png';
import { Button } from 'antd';
import { useLocation } from 'react-router-dom';
import { PROVIDERS } from '../../constants';

export function Subscription() {
  const location = useLocation();
  const { smsNumber, smsBody, content } = PROVIDERS['teletalk'];
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    window.location.href = `sms:${smsNumber}?body=${encodeURIComponent(
      smsBody
    )}`;
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
      {content.split('-').map((t, key) => (
        <p key={key}>{t}</p>
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
    />
  );
}
