import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

export default class DatePickerElement extends Component {
  onChange = (range, dateString) => {
    this.props.handleChange &&
      this.props.handleChange({ ...this.props, range, dateString }, dateString);
  };

  disabledDateToday = (current) => {
    // Can not select days before today and today
    return current && current.valueOf() < moment().endOf('day');
  };

  disabledPrevious = (current) => {
    // Can not select days before today
    return current && current.valueOf() < moment().add(-1, 'day');
  };

  disabledAfter = (current) => {
    // Can not select days after today
    return current && moment(current).startOf('day') > moment().endOf('day');
  };

  render() {
    return (
      <DatePicker
        allowClear={true}
        showNow={false}
        selected={
          this.props.value == ''
            ? moment()
            : moment(this.props.value, 'DD/MM/YYYY')
        }
        showTime={this.props.showTime ? { format: 'HH:mm' } : null}
        {...this.props}
        value={this.props.value}
        disabledDate={
          this.props.disableToday
            ? this.disabledDateToday
            : this.props.disablePrevious
            ? this.disabledPrevious
            : this.props.disabledAfter
            ? this.disabledAfter
            : this.props.disabledDate
        }
        onChange={this.onChange}
        inputReadOnly={true}
      />
    );
  }
}
