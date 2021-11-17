import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import { Button } from 'antd';
const ButtonElement = (props) => {
  return (
    <Button
      style={props.styleProps || {}}
      color={props.color}
      onClick={props.onClick}
      disabled={props.disabled || props.loading}
      variant={props.variant}
      className={props.className}
      type={props.type || null}
    >
      {props.loading ? <Loader classList={['sm white']} /> : ''}
      {props.children}
    </Button>
  );
};

export default ButtonElement;

ButtonElement.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  type: PropTypes.string,
  loading: PropTypes.bool,
  styleProps: PropTypes.object,
};
