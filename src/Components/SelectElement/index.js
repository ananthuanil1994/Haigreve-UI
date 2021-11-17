import React from 'react';
import { Select } from 'antd';

export const SelectElement = (props) => {
  function onBlur() {}

  function onFocus() {}

  function onSearch(val) {}

  return (
    <Select
      showArrow={props.showArrow}
      allowClear={props.allowClear}
      showSearch={props.showSearch}
      tokenSeparators={props.tokenSeparators}
      style={props.style}
      mode={props.mode}
      placeholder={props.placeholder || 'Select option'}
      optionFilterProp="children"
      onChange={props.onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      maxTagCount={props.maxTagCount || 10}
      onSearch={props.showSearch && onSearch}
      defaultValue={props.defaultValue}
      value={props.value}
      className={`${props.className || ''} ${
        !props.isValid ? ' error-field' : ''
      }`}
      filterOption={filterOptions}
      options={props.optionList.map(({ value, label }) => ({ value, label }))}
    ></Select>
  );
};

function filterOptions(input = '', option = {}) {
  if (option.props && option.props.label && option.props.value)
    return (
      option.props.label.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
      option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
    );
  else if (option.value)
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  return false;
}
