/* eslint-disable */
import React from 'react';
import style from './style.module.scss';
import { SupportLink } from './SupportLink';

export function PaymentLeft({ nextButton }) {
	const onSubmit = (cb) => {
		cb?.();
	};

	return (
		<React.Fragment>
			<div className={style.paymentContainer}>Payment Gateway</div>
			<div className={style.contentArea__bottom}>
				{nextButton({ onClick: onSubmit })}
			</div>
		</React.Fragment>
	);
}

export function PaymentRight({ config: { image } }) {
	return (
		<div className={style.contentBlock__right}>
			<div className={style.planArea}>
				<div className={style.planContent}>
					<div className={style.planContent__img}>
						<img src={image} />
					</div>
					<ul className={style.planContent__list}>
						<li>Payment</li>
					</ul>
				</div>
				<SupportLink />
			</div>
		</div>
	);
}
