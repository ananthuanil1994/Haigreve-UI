/*eslint-disable */
import React from 'react';
import Wrapper, {
  RightSection,
  SuccessSection,
} from '../../Components/Wrapper';
import Messaging from '../../../public/img/messaging.png';
import Engineering from '../../../public/img/engineering.png';
import AppStore from '../../../public/img/app-store.png';
import PlayStore from '../../../public/img/google-play.png';
import { SOCIAL_LINKS } from '../../constants';

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
        successTxt={'Please check your mobile for text messages from 2700.'}
        successImage={Messaging}
        socialText={'Meanwhile, Please Download our App!'}
        socialLinks={[
          { icon: AppStore, link: SOCIAL_LINKS.apple },
          { icon: PlayStore, link: SOCIAL_LINKS.android },
        ]}
      />
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
