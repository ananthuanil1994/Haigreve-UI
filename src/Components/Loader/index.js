import React from 'react';
import './style.scss';

const Loader = (props) => {
  let customStyle = {};

  if (props.customHeight) {
    customStyle = {
      minHeight: props.customHeight + 'px',
    };
  }

  const withWrapper = () => (
    <div
      className={props.hasOverlay ? 'loader-block overlay' : 'loader-block'}
      style={customStyle}
    >
      {withoutWrapper()}
    </div>
  );

  const withoutWrapper = () => {
    let classList = ['loader'];
    if (props && props.classList && typeof props.classList === 'object')
      classList = classList.concat(props.classList);
    let list = [];
    for (let i = 0; i < 13; i++) {
      list.push(<div key={i} className="loader__item" />);
    }
    return <div className={classList.join(' ')}>{list}</div>;
  };

  if (props && props.hasWrapper) return withWrapper();
  else return withoutWrapper();
};

export default Loader;
