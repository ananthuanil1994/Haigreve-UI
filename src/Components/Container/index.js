import React, { Component } from 'react';
import PropType from 'prop-types';
import style from './style.module.scss';
export default class Container extends Component {
  setStyle = () => this.props.fluid ? style.containerFluid : style.container;
  render() {
    return (
      <div className={this.setStyle()} >
        {this.props.children}
      </div>
    );
  }
}
Container.Prototype = {
  children: PropType.element,
  fluid: PropType.bool,
};
Container.defaultValue = {
  childern: null
};