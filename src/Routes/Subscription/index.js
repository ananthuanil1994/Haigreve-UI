/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import Wrapper, { RightSection } from '../../Components/Wrapper';
import subscriptionImage from '../../../public/img/subscription.png';
import { Button } from 'antd';
import { useLocation } from 'react-router-dom';
import { PROVIDERS } from '../../constants';
import { useParams } from 'react-router-dom';
import {isMobile} from 'react-device-detect';

export function Subscription() {
  const location = useLocation();
  const params = useParams();
  useEffect(() => {
    if (!(params.provider in PROVIDERS)) {
      window.location.replace('/');
    }
  }, []);
  const { smsNumber, smsBody, content } = PROVIDERS[params.provider];
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    if (isMobile){
      window.location.href = `sms:// ${smsNumber};?&body=${encodeURIComponent(
        smsBody
      )}`
    }
    else{
    window.location.href = `/${params.provider}/notphone`;
    }
   ;
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
