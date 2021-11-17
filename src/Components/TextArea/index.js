/* eslint-disable  */
import React, { useEffect } from 'react';
import { Input } from 'antd';

const defaultHeight = 50;

const TextArea = (props) => {
  useEffect(() => {
    const tx = document.getElementsByTagName('textarea');

    for (let i = 0; i < tx.length; i++) {
      if (!props.value) {
        tx[i].setAttribute('style', 'height: 0px;overflow-y:hidden;');
      } else {
        tx[i].setAttribute(
          'style',
          'height:' + tx[i].scrollHeight + 'px;overflow-y:hidden;'
        );
        tx[i].addEventListener('input', OnInput, false);
      }
    }

    function OnInput() {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    }
  });

  const { TextArea } = Input;
  const onChange = (eve) => {
    props.handleChange &&
      props.handleChange({
        value: eve.target.value,
        name: eve.target.name,
        index: props.index,
        formObject: props.formObject,
      });
  };

  return (
    <TextArea
      as="textarea"
      onBlur={props.onBlur}
      rows={props.rows || defaultHeight}
      cols={props.cols}
      onChange={onChange}
      disabled={props.disabled}
      placeholder={props.placeHolder}
      value={props.value}
      type={props.htmlType}
      name={props.name}
      onKeyUp={props.onKeyUp}
      className={`${props.className || 'textarea-item'} ${
        !props.isValid ? ' error-field' : ''
      }`}
    />
  );
};

export default TextArea;

TextArea.defaultProps = {
  onKeyUp: () => {},
};
