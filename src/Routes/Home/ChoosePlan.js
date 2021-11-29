/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getAvailablePlans } from '../../api';
import { ContentLoader } from '../../Components/ContentLoader';
import constants from './constants';
import style from './style.module.scss';

export function ChoosePlanLeft({ nextButton, data }) {
	const [activePlan, setPlan] = useState(data?.plan);
	const [apiInfo, setApiInfo] = useState({
		loading: true,
		data: [],
		error: false,
	});

	const callApi = async () => {
		setApiInfo({ loading: true });
		const response = await getAvailablePlans();
		setApiInfo({ data: response.data, error: !response.success });
		setPlan(data?.plan || response.data?.[0]?.id);
	};

	useEffect(() => {
		callApi();
	}, []);

	const onSubmit = (cb) => {
		if (apiInfo.data?.find((item) => item.id === activePlan))
			cb?.({ plan: activePlan });
	};

	const renderPlans = () => {
		if (apiInfo.loading)
			return <ContentLoader spaceBetween={1.5} hasWrapper />;
		if (apiInfo.error)
			return (
				<p
					className={style.errorMessage}
					children={constants.errorMessage}
				/>
			);
		const plans = apiInfo.data?.map((option) => (
			<li
				key={option.id}
				className={activePlan === option.id ? style.active : ''}
				onClick={() => setPlan(option.id)}>
				<p> {option.planName}</p> <span>{option.amount} Taka</span>
			</li>
		));
		return <ul className={style.listBlock} children={plans} />;
	};

	return (
		<React.Fragment>
			{renderPlans()}
			<div className={style.contentArea__bottom}>
				{nextButton({ onClick: onSubmit, disabled: !activePlan })}
			</div>
		</React.Fragment>
	);
}

export function ChoosePlanRight({ config: { image } }) {
	return (
		<div className={style.contentBlock__right}>
			<div className={style.planArea}>
				<div className={style.planContent}>
					<div className={style.planContent__img}>
						<img src={image} />
					</div>
					<ul className={style.planContent__list}>
						<li>Choose your plan</li>
					</ul>
					<a className='startBtn' href=''>
						Get Started
					</a>
				</div>
				<div className={style.planFooter}>
					<a>
						<span>
							<svg viewBox='0 0 60 59.999'>
								<path
									data-name='Path 117'
									d='M-1819.477,65l2.477-6.192V55h-24V15h20.466a9.9,9.9,0,0,1,.673-1.619l-2.452-2.453,4.242-4.242,2.453,2.452A9.851,9.851,0,0,1-1814,8.466V5h6V8.466a9.824,9.824,0,0,1,1.619.672l2.453-2.452,4.242,4.242-2.453,2.453a9.745,9.745,0,0,1,.673,1.619H-1781V55h-24v3.808l2.478,6.192Zm2.954-2h11.046l-1.2-3h-8.646Zm1.523-5h8V55h-8Zm-24-5h56V49h-56Zm0-6h56V17h-15v4h-3.466a9.745,9.745,0,0,1-.673,1.619l2.453,2.452-4.242,4.242-2.453-2.451a9.9,9.9,0,0,1-1.619.671V31h-6V27.534a9.926,9.926,0,0,1-1.618-.671l-2.453,2.451-4.242-4.242,2.452-2.452a9.9,9.9,0,0,1-.673-1.619H-1824V17h-15Zm23.747-22.233a7.908,7.908,0,0,0,2.474,1.027l.778.177V29h2V25.971l.778-.177a7.9,7.9,0,0,0,2.474-1.027l.676-.425,2.144,2.143,1.414-1.414-2.143-2.145.426-.676a7.952,7.952,0,0,0,1.027-2.472l.177-.778H-1800V17h-3.023l-.176-.779a7.967,7.967,0,0,0-1.032-2.472l-.426-.676,2.143-2.145-1.414-1.414-2.144,2.143-.675-.425a7.947,7.947,0,0,0-2.475-1.027l-.778-.177V7h-2v3.028l-.778.177a7.965,7.965,0,0,0-2.475,1.027l-.675.425-2.143-2.143-1.414,1.414,2.143,2.145-.426.676a7.949,7.949,0,0,0-1.027,2.472l-.177.779H-1822v2h3.028l.177.778a7.949,7.949,0,0,0,1.027,2.472l.426.676-2.143,2.145,1.414,1.414,2.143-2.143ZM-1826.414,45l-6.465-6.464a3.829,3.829,0,0,1,0-5.414,3.828,3.828,0,0,1,5.413,0l3.879,3.878H-1818a4,4,0,0,1,4-4h9.162l6,2H-1788V45Zm-5.447-9.871a1.829,1.829,0,0,0,.4,1.993l5.879,5.878H-1790V37h-9.162l-6-2H-1814a2,2,0,0,0-2,2,2,2,0,0,0,2,2h9v2h-9a4,4,0,0,1-3.462-2h-6.952l-4.465-4.464a1.836,1.836,0,0,0-1.292-.535A1.828,1.828,0,0,0-1831.861,35.129ZM-1817,18a6,6,0,0,1,6-6,6,6,0,0,1,6,6,6,6,0,0,1-6,6A6.007,6.007,0,0,1-1817,18Zm2,0a4,4,0,0,0,4,4,4,4,0,0,0,4-4,3.946,3.946,0,0,0-.141-1h-7.717A3.953,3.953,0,0,0-1815,18Zm1.382-3h5.236A3.919,3.919,0,0,0-1811,14,3.916,3.916,0,0,0-1813.618,15Z'
									transform='translate(1841 -5)'
								/>
							</svg>
						</span>
						<span>support link here </span>
					</a>
				</div>
			</div>
		</div>
	);
}
