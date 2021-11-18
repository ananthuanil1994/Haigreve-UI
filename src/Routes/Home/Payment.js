import React from 'react';
import style from './style.module.scss';

export function PaymentLeft({ nextButton }) {

    const onSubmit = (cb) => {
        cb?.();
    };

    return (
        <React.Fragment>
            <div className={style.listBlock}>
                Payment Gateway
            </div>
            <div className={style.contentArea__bottom}>
                {nextButton({ onClick: onSubmit })}
            </div>
        </React.Fragment>
    );
};

export function PaymentRight({ config: { image } }) {
    return (
        <div className={style.contentBlock__right}>
            <div className={style.planArea}>
                <div className={style.planArea__img}><img src={image} /></div>
                <ul>
                    <li>Payment</li>
                </ul>
            </div>
        </div>
    );
}