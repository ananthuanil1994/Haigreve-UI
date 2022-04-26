/*eslint-disable */
import React, { useEffect } from 'react';
import Wrapper, {
  RightSection,
  SuccessSection,
} from '../../Components/Wrapper';
import Download from '../../../public/img/download1.png';
import Engineering from '../../../public/img/engineering.png';
import AppStore from '../../../public/img/app-store.png';
import PlayStore from '../../../public/img/google-play.png';
import { SOCIAL_LINKS } from '../../constants';
import { Button } from 'antd';
import style from './style.module.scss';

function handleClick() {
  window.location.href = '/teletalk/details';
}
export default function Confirmation(props) {
  return (
    <>
      <Wrapper left={ConfirmationLeft()} right={ConfirmationRight()} />
    </>
  );
}
function ConfirmationLeft() {
  return (
    <>
      <SuccessSection
        // successTxt={'Please check your mobile for text messages from 2700.'}
        successImage={Download}
        socialText={'Please Download our App!'}
        socialLinks={[
          { icon: AppStore, link: SOCIAL_LINKS.apple },
          { icon: PlayStore, link: SOCIAL_LINKS.android },
        ]}
      />
      <h3 className={style.next}>
        You can activate the application by clicking next button
      </h3>
      <Button
        id={style.downloadBtn}
        onClick={() => handleClick()}
        loading={false}
      >
        Next
      </Button>
    </>
  );
}

function ConfirmationRight() {
  return (
    <RightSection
      contentimage={Engineering}
      contentText={'Processing'}
      showGetStarted={false}
      download
    />
  );
}
