/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import style from './style.module.scss';
import constants from './constants';
import { ChoosePlanLeft, ChoosePlanRight } from './ChoosePlan';
import { InfoFormLeft, InfoFormRight } from './InfoForm';
import { PaymentLeft, PaymentRight } from './Payment';
import { SuccessLeft, SuccessRight } from './Success';
import Loader from '../../Components/Loader';
import { Button } from 'antd';
import { submitUserPlanInfo } from '../../api';
import { getIndexRoute } from '../../utils/queryString';
import { ROUTES } from '../../Routes.constants';
import Wrapper from '../../Components/Wrapper';
function Home(props) {
  const [activeTab, setActiveTab] = useState(constants.tabs.choosePlan);
  const [forms, setForms] = useState({});
  useEffect(() => {
    if (getIndexRoute() === ROUTES.PAYMENT_SUCCESS.split('/')[1])
      setActiveTab(constants.tabs.success);
  }, []);

  const submitUserInfo = async (requestBody) => {
    requestBody.plan = forms[constants.tabs.choosePlan]?.plan;
    return await submitUserPlanInfo(requestBody);
  };

  const getContent = () => {
    switch (activeTab) {
      case constants.tabs.choosePlan:
        return {
          Left: (
            <ChoosePlanLeft data={forms[activeTab]} nextButton={nextButton} />
          ),
          Right: <ChoosePlanRight config={constants.pageConfig[activeTab]} />,
        };
      case constants.tabs.infoForm:
        return {
          Left: (
            <InfoFormLeft
              submitUserInfo={submitUserInfo}
              nextButton={nextButton}
            />
          ),
          Right: <InfoFormRight config={constants.pageConfig[activeTab]} />,
        };
      case constants.tabs.payment:
        return {
          Left: <PaymentLeft nextButton={nextButton} />,
          Right: <PaymentRight config={constants.pageConfig[activeTab]} />,
        };
      case constants.tabs.success:
        return {
          Left: <SuccessLeft nextButton={nextButton} />,
          Right: <SuccessRight config={constants.pageConfig[activeTab]} />,
        };

      default:
        return {
          Left: null,
          Right: null,
        };
    }
  };

  const getTabHint = () =>
    //map the tabs into ui, and style the active tab, re-renders...
    Object.keys(constants.tabs).map((tabName) => (
      <li key={tabName} className={tabName === activeTab ? style.active : ''} />
    ));

  const nextButton = ({ onClick, loading, disabled }) => {
    const tabs = Object.keys(constants.tabs);
    const activeTabIndex = tabs.findIndex((tab) => tab === activeTab);
    const showNext = tabs[activeTabIndex + 1];
    const nextTab = tabs[activeTabIndex + 1];

    const onClickNext = () => {
      onClick?.((form) => {
        setForms({ ...forms, [activeTab]: form });
        if (nextTab) setActiveTab(nextTab);
      });
    };
    const onClickBack = () => setActiveTab(constants.tabs.choosePlan);

    let backButton =
      activeTab === constants.tabs.infoForm ? (
        <Button
          disabled={loading}
          children="Prev"
          onClick={onClickBack}
          className={style.nextBtn}
        />
      ) : (
        <div />
      );

    return showNext ? (
      <React.Fragment>
        {backButton}
        <Button
          disabled={loading || disabled}
          onClick={onClickNext}
          className={style.nextBtn}
        >
          {loading ? <Loader classList={['sm white']} /> : ''}
          Next
        </Button>
      </React.Fragment>
    ) : (
      <React.Fragment>
        {backButton}
        <Button
          disabled={loading || disabled}
          onClick={onClick}
          className={style.nextBtn}
        >
          {loading ? <Loader classList={['sm white']} /> : ''}
          Submit
        </Button>
      </React.Fragment>
    );
  };

  const ControlArea = () => {
    return <ul className={style.controlArea} children={getTabHint()} />;
  };

  const { Left, Right } = getContent();
  return <Wrapper left={Left} right={Right} leftExtra={ControlArea()} />;
}

export default Home;
Home.PropType = {
  className: PropType.string,
};
