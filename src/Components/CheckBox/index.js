import React from 'react';
import { Checkbox } from 'antd';

const CheckBox = (props) => {
  const inputChange = (eve) => {
    props.handleChange &&
      props.handleChange({
        value: eve.target.checked,
        name: eve.target.name,
        index: props.index,
        formObject: props.formObject,
      });
  };
  return (
    <Checkbox type='checkbox' name={props.label} onChange={props.onChange || inputChange} checked={props.selected}>
      {props.children ? props.children : props.displayName ? props.displayName : props.label}
    </Checkbox>
  );
};

export default CheckBox;
