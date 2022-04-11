/*eslint-disable */
import React from 'react';
import Wrapper, {
  RightSection,
  SuccessSection,
} from '../../Components/Wrapper';
import Messaging from '../../../public/img/messaging.png';
import Engineering from '../../../public/img/engineering.png';

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
        successTxt={
          'Please check your mobile for text messages from 2700.'
          //   'You have successfully subscribed. Check for messages from 2700.'
        }
        successImage={Messaging}
      />
      {/* <a href="/">Click on the activation Link</a> */}
      {/* <img src={Messaging} height="170px" width={'170px'} /> */}
    </>
  );
}

function ConfirmationRight() {
  return (
    <RightSection
      contentimage={Engineering}
      contentText={'Processing'}
      showGetStarted={false}
    />
  );
}
