import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import provider from '../../../public/img/provider.png';

import Wrapper, { RightSection } from '../../Components/Wrapper';
import style from './style.module.scss';

export function Provider() {
  return <Wrapper left={ProviderLeft()} right={ProviderRight()} />;
}

function ProviderLeft() {
  const providers = ['Teletalk', 'Grameenphone', 'Robi'];
  return (
    <div className={style.provider}>
      <h3 className={style.providerTitle}>Select Your Provider</h3>
      <div className={style.providerList}>
        {providers.map((provider) => (
          <Button key={provider} className={style.providerBtn}>
            <Link to={`/${provider.toLowerCase()}/home`}>{provider}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}

function ProviderRight() {
  return (
    <RightSection
      contentimage={provider}
      contentText={'Provider'}
      showGetStarted={false}
    />
  );
}
