/* eslint-disable */
import React from 'react';
import style from './style.module.scss';
import PropTypes from 'prop-types';
export const ContentLoader = ({
  height = 1,
  width = 100,
  number = 4,
  spaceBetween = 0.5,
  paragraphFactor = 1.15,
  radius = 0.2,
  hasWrapper = false,
}) => {
  // Add extra styles if needed here
  let customLiStyle = {
    minHeight: `${height}rem`,
    width: `${width}%`,
    marginBottom: `${spaceBetween}rem`,
    borderRadius: `${radius}rem`,
  };
  if (hasWrapper)
    return (
      <div className={style.loaderBlock}>
        {createLoaders({
          number,
          customLiStyle,
          paragraphDivisionFactor: paragraphFactor,
        })}
      </div>
    );
  else {
    return createLoaders({
      number: 1,
      customLiStyle,
      paragraphDivisionFactor: paragraphFactor,
    });
  }
};
// Creates the number of li based on the number (Default is 4)
const createLoaders = ({ number, customLiStyle, paragraphDivisionFactor }) => {
  let loaders = [];
  for (let index = 0; index < number; index++) {
    if (index === 0) {
      let customParagraphStyle = { ...customLiStyle };
      customParagraphStyle.width = `${
        parseInt(customParagraphStyle.width) / paragraphDivisionFactor
      }%`;
      loaders.push(
        <div
          key={index}
          className={style.loaderElement}
          style={customParagraphStyle}
        />
      );
    } else
      loaders.push(
        <div
          key={index}
          className={style.loaderElement}
          style={customLiStyle}
        />
      );
  }
  return loaders;
};
ContentLoader.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  number: PropTypes.number,
  spaceBetween: PropTypes.number,
  paragraphFactor: PropTypes.number,
  radius: PropTypes.number,
};
