/* eslint-disable */
import React from 'react';
import style from './style.module.scss';
function Card({ className = '', children }) {
  return <section className={`${style.card} ${className}`}>{children}</section>;
}
function CardBody({ className = '', children, onClick }) {
  return (
    <div onClick={onClick} className={`${style.cardBody} ${className}`}>
      {children}
    </div>
  );
}
function CardHeader(props) {
  const { className = '', children } = props;
  return (
    <div {...props} className={`${style.cardHeader} ${className}`}>
      {children}
    </div>
  );
}
function CardCover(props) {
  const { className = '', children } = props;
  return (
    <div {...props} className={`${style.cardCover} ${className}`}>
      {children}
    </div>
  );
}
function CardFooter({ className = '', children }) {
  return <div className={`${style.cardFooter} ${className}`}>{children}</div>;
}

export { Card, CardHeader, CardCover, CardBody, CardFooter };
