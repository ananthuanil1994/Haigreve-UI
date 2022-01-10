/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getAvailablePlans } from '../../api';
import { ContentLoader } from '../../Components/ContentLoader';
import { RightSection } from '../../Components/Wrapper';
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
    if (apiInfo.loading) return <ContentLoader spaceBetween={1.5} hasWrapper />;
    if (apiInfo.error)
      return (
        <p className={style.errorMessage} children={constants.errorMessage} />
      );
    const plans = apiInfo.data?.map((option) => (
      <li
        key={option.id}
        className={activePlan === option.id ? style.active : ''}
        onClick={() => setPlan(option.id)}
      >
        <p> {option.planName}</p> <span>{option.amount} Taka</span>
      </li>
    ));
    return <ul className={style.listBlock} children={plans} />;
  };

  return (
    <React.Fragment>
      {renderPlans()}
      <div className={style.controlButtons}>
        {nextButton({ onClick: onSubmit, disabled: !activePlan })}
      </div>
    </React.Fragment>
  );
}

export function ChoosePlanRight({ config: { image } }) {
  return <RightSection contentimage={image} contentText={'Choose your plan'} />;
}
