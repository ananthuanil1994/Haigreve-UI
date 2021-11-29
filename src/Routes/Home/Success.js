/* eslint-disable */
import React from 'react';
import style from './style.module.scss';
import { SupportLink } from './SupportLink';

export function SuccessLeft({ nextButton }) {
	const onSubmit = (cb) => {
		cb?.();
	};
	return (
		<React.Fragment>
			<div className={style.success}>
				<h3>
					You have successfully subscribed. You'll receive text to
					activate your license.
				</h3>
				<img src='..\img\success.png' />
			</div>
			<div className={style.contentArea__bottom}>
				{nextButton({ onClick: onSubmit })}
			</div>
		</React.Fragment>
	);
}

export function SuccessRight({ config: { image } }) {
	return (
		<div className={style.contentBlock__right}>
			<div className={style.planArea}>
				<div className={style.planContent}>
					<div className={style.planContent__img}>
						<img src='..\img\winner.png' />
					</div>
					<ul className={style.planContent__list}>
						<li>Winner</li>
					</ul>
				</div>
				<SupportLink />
			</div>
		</div>
	);
}
