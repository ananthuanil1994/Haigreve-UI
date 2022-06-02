/*eslint-disable */

import React from 'react';
import Wrapper, { RightSection } from '../../Components/Wrapper';
import RightImage from '../../../public/img/smartphone.png';
import style from './style.module.scss';

export default function notMobilePhone() {
    return (
      <Wrapper
        left={<SuccessLeft />}
        right={<SuccessRight />}
        image={RightImage}
      />
    );
}

function SuccessLeft() {
  return (
    <React.Fragment>
      <div className={style.success}>
        <h3>Please use your mobile phone to activate the subscription</h3>
        <img style={{ maxWidth: '130px' }} src="..\img\sad.png" />
      </div>
    </React.Fragment>
  );
}

function SuccessRight() {
  return (
    <RightSection
      contentimage={RightImage}
      showGetStarted={false}
    />
  );
}