import React, { useEffect, useState } from 'react';
import { getAvailablePlans } from '../../api';
import { ContentLoader } from '../../Components/ContentLoader';
import style from './style.module.scss';


export function ChoosePlanLeft({ nextButton, data }) {

    const [activePlan, setPlan] = useState(data?.plan);
    const [apiInfo, setApiInfo] = useState({ loading: true, data: [], error: false });

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
        if (apiInfo.data?.find(item => item.id === activePlan)) cb?.({ plan: activePlan });
    };

    const renderPlans = () => {
        if (apiInfo.loading) return <ContentLoader spaceBetween={1.5} hasWrapper />;
        return apiInfo.data?.map(option => (
            <li className={activePlan === option.id ? style.active : ''} onClick={() => setPlan(option.id)}>
                {option.planName}  <span>{option.amount}</span>
            </li>
        ));
    };

    return (
        <React.Fragment>
            <ul className={style.listBlock}>
                {renderPlans()}
            </ul>
            <div className={style.contentArea__bottom}>
                {nextButton({ onClick: onSubmit })}
            </div>
        </React.Fragment>
    );
};

export function ChoosePlanRight({ config: { image } }) {
    return (
        <div className={style.contentBlock__right}>
            <div className={style.planArea}>
                <div className={style.planArea__img}><img src={image} /></div>
                <ul>
                    <li>Choose your plan</li>
                </ul>
                <a className="startBtn" href="">Get Started</a>
            </div>
        </div>
    );
}