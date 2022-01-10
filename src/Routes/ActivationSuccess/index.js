import React from 'react';
import style from './style.module.scss';
import Wrapper, { RightSection } from '../../Components/Wrapper';
import RightImage from '../../../public/img/winner.png';
export default function ActivationSuccess(props) {
  return (
    <>
      <Wrapper left={SuccessLeft()} right={SuccessRight()} image={RightImage} />
    </>
  );
}

function SuccessLeft() {
  return (
    <React.Fragment>
      <div className={style.success}>
        <h3>You have successfully activated.</h3>
        <img src='..\img\success.png' />
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
