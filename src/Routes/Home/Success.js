/* eslint-disable */
import React from 'react';
import { RightSection, SuccessSection } from '../../Components/Wrapper';
import style from './style.module.scss';
import RightImage from '../../../public/img/winner.png';

export function SuccessLeft({ nextButton }) {
  return (
    <SuccessSection
      successTxt={
        "You have successfully subscribed. You'll receive text to activate your license."
      }
      nextButton={nextButton}
    />
  );
}

export function SuccessRight({ config: { image } }) {
  return (
    <RightSection
      contentimage={RightImage}
      contentText={'Winner'}
      showGetStarted={false}
    />
  );
}
