import React, { useEffect } from 'react';
import style from './style.module.scss';
import Wrapper, { RightSection } from '../../Components/Wrapper';
import RightImage from '../../../public/img/success1.png';
import Loader from '../../Components/Loader';
import FailureAnimation from '../../../public/img/warning.gif';
import Failure from '../../../public/img/sad.png';
import System from '../../../public/img/system.png';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { activateSubscription } from '../../api';
// import RightImage from '../../../public/img/winner.png';
export default function ActivationSuccess(props) {
  // const location = useLocation();

  // const searchParams = new URLSearchParams(location.search);
  // const body = {
  //   email: searchParams.get('email'),
  //   phone: searchParams.get('phone')
  // }
  // const [status, setStatus] = useState({});

  // useEffect(async () => {
  //   const response = await activateSubscription(body);
  //   if(response.data.url) {
  //     setStatus(true);
  //   }
  // }, [])

  const condition = true;
  const renderLeft = condition ? SuccessLeft : FailureLeft;
  const renderRight = condition ? SuccessRight : FailureRight;

  return (
    <>
      <Wrapper left={renderLeft()} right={renderRight()} image={RightImage} />
    </>
  );
}

function SuccessLeft() {
  return (
    <React.Fragment>
      <div className={style.success}>
        <h3>Your subscription is successfully activated.</h3>
        <img src="..\img\success.png" />
        <Loader classList={['lg blue']} />
      </div>
    </React.Fragment>
  );
}

function SuccessRight() {
  return (
    <RightSection
      contentimage={RightImage}
      contentText={'Winner'}
      showGetStarted={false}
    />
  );
}

function FailureLeft() {
  return (
    <React.Fragment>
      <div className={style.success}>
        <h3>Unfortunately, your subscription is not activated.</h3>
        <img src={Failure} style={{ maxWidth: '130px' }} />
      </div>
    </React.Fragment>
  );
}

function FailureRight() {
  return (
    <RightSection
      contentimage={System}
      contentText={'Try Again later'}
      showGetStarted={false}
    />
  );
}
