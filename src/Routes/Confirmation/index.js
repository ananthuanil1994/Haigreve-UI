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
import { useParams } from 'react-router-dom';

export default function Confirmation(props) {
  const params = useParams();
  function handleClick() {
    window.location.href = `/${params.provider}/details`;
  }
  return (
    <>
      <Wrapper
        left={ConfirmationLeft(handleClick)}
        right={ConfirmationRight()}
      />
    </>
  );
}
function ConfirmationLeft(handleClick) {
  return (
    <>
      <SuccessSection
        successImage={Download}
        socialText={'Please Download our App!'}
        socialLinks={[
          { icon: AppStore, link: SOCIAL_LINKS.apple },
          { icon: PlayStore, link: SOCIAL_LINKS.android },
        ]}
      />
      <h3 className={style.next}>
        You can activate the application by clicking Next
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
