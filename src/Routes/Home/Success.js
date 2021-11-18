import React from 'react';
import style from './style.module.scss';

export function SuccessLeft({ nextButton }) {

    const onSubmit = (cb) => {
        cb?.();
    };
    return (
        <React.Fragment>
            <div className={style.success}>
               <h3> You have successfully subscribed. You'll receive text to activate your license.</h3>
               <img src="..\img\success.png"/>
            </div>
            <div className={style.contentArea__bottom}>
                {nextButton({ onClick: onSubmit })}
            </div>
        </React.Fragment>
    );
};

export function SuccessRight({ config: { image } }) {
    return (
        <div className={style.contentBlock__right}>
            <div className={style.planArea}>
                <div className={style.planArea__img}><img src='..\img\winner.png' /></div>
                <ul>
                    <li>Winner</li>
                </ul>
            </div>
        </div>
    );
}