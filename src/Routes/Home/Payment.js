/* eslint-disable */
import React from 'react';
import { RightSection } from '../../Components/Wrapper';
import style from './style.module.scss';
import { SupportLink } from './SupportLink';

export function PaymentLeft({ nextButton }) {
  const onSubmit = (cb) => {
    cb?.();
  };

  return (
    <React.Fragment>
      <div className={style.paymentContainer}>Payment Gateway</div>
      <div className={style.controlButtons}>
        {nextButton({ onClick: onSubmit })}
      </div>
    </React.Fragment>
  );
}

export function PaymentRight({ config: { image } }) {
  return (
    <RightSection
      contentimage={image}
      contentText={'Payment'}
      showGetStarted={false}
    />
  );
}
