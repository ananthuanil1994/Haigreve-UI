/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
export const TextInput = (props) => {
  const inputChange = (eve) => {
    props.onChange &&
      props.onChange({
        ...props,
        value: eve.target.value,
        name: eve.target.name,
        index: props.index,
        formObject: props.formObject,
        ...eve,
      });
  };
  return (
    <Input
      onChange={inputChange}
      disabled={props.disabled}
      placeholder={props.placeholder}
      // defaultValue={props.defaultValue}
      value={props.value}
      type={props.htmlType}
      name={props.name}
      autoFocus={props.autoFocus}
      key={props.key}
      onKeyDown={props.onKeyDown}
      onPressEnter={props.onPressEnter}
      onClick={props.onClick}
      id={props.id}
      max={props.max}
      onFocus={props.onFocus}
      required={props.required}
      min={props.min}
      onBlur={props.onBlur}
      style={props.style}
      className={`${props.className || ''} ${!props.isValid ? ' ' : ''}`}
    />
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  index: PropTypes.number,
  disabled: PropTypes.bool,
  placeHolder: PropTypes.string,
  value: PropTypes.any,
  htmlType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isValid: PropTypes.bool,
};
