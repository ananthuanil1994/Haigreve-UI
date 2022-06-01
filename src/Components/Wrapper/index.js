/*eslint-disable*/
import React from 'react';
import PropType from 'prop-types';
import style from './style.module.scss';
import Container from '../Container';
import SuccessImage from '../../../public/img/success.png';
import Android from '../../../public/img/android.png';
import { SOCIAL_LINKS } from '../../constants';

function Wrapper({ left, right, leftExtra }) {
  return (
    <Container>
      <div className={style.contentBlock}>
        <div className={style.contentBlock__left}>
          <div className={style.contentArea}>{left}</div>
          {leftExtra}
        </div>
        {right}
      </div>
    </Container>
  );
}

export default Wrapper;
Wrapper.PropType = {
  className: PropType.string,
};

export function RightSection({
  contentimage,
  contentText,
  showGetStarted = true,
  download = false,
}) {
  return (
    <div className={style.contentBlock__right}>
      <div className={style.planArea}>
        <div className={style.planContent}>
          <div className={style.planContent__img}>
            <img src={contentimage} alt="content-img" />
          </div>
          <ul className={style.planContent__list}>
            {contentText && <li>{contentText}</li>}
            {download && <li>Download</li>}
          </ul>
          {showGetStarted ? (
            <a className="startBtn" href="">
              Get Started
            </a>
          ) : null}
          {download && <DownloadLinks />}
        </div>
      </div>
    </div>
  );
}

export function DownloadLinks() {
  return (
    <ul className={style.downloadLink}>
      <li onClick={() => (location.href = SOCIAL_LINKS.apple)}>
        <span className={style.downloadIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>
        </span>
        <span>apple</span>
      </li>
      <li onClick={() => (location.href = SOCIAL_LINKS.android)}>
        <span className={style.downloadIcon}>
          <img src={Android} />
        </span>
        <span>android</span>
      </li>
    </ul>
  );
}

export function SuccessSection({
  successTxt,
  socialText,
  socialLinks,
  successImage = SuccessImage,
  nextButton,
}) {
  const onSubmit = (cb) => {
    cb?.();
  };
  return (
    <React.Fragment>
      <div className={style.success}>
        <h3>{successTxt}</h3>
        <img src={successImage} />
        {socialText && <h3 className={style.socialTxt}>{socialText}</h3>}
        {socialLinks && (
          <ul className={style.socialLinks}>
            {socialLinks.map((item, idx) => (
              <li key={idx} onClick={() => (location.href = item.link)}>
                <img src={item.icon} />
              </li>
            ))}
          </ul>
        )}
      </div>
      {nextButton ? (
        <div className={style.contentArea__bottom}>
          {nextButton({ onClick: onSubmit })}
        </div>
      ) : null}
    </React.Fragment>
  );
}
