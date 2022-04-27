/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import style from './style.module.scss';
import constants from './constants';
import { InfoFormLeft, InfoFormRight } from './InfoForm';
import Loader from '../../Components/Loader';
import { Button } from 'antd';
import { submitUserPlanInfo } from '../../api';
import Wrapper from '../../Components/Wrapper';
import { useParams } from 'react-router-dom';
import { PROVIDERS } from '../../constants';
function Home(props) {
  const [activeTab, setActiveTab] = useState(constants.tabs.infoForm);
  const [forms, setForms] = useState({});

  const submitUserInfo = async (requestBody, provider) => {
    return await submitUserPlanInfo(requestBody, provider);
  };

  const getContent = () => {
    switch (activeTab) {
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

      default:
        return {
          Left: null,
          Right: null,
        };
    }
  };

  const getTabHint = () =>
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
      activeTab === constants.tabs.choosePlan ? (
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
          Next
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
