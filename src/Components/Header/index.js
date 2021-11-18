import React from 'react';
import { withRouter } from 'react-router-dom';
import PropType from 'prop-types';
import style from './style.module.scss';
function Header(props) {

	return (
		<header className={style.mainHeader}>
			<div className={style.headerBrand}>
				<span className={style.logo}><img src="../img/logo.png"/></span>
			</div>
		</header>
	);
}
export default withRouter(Header);
Header.PropType = {
	className: PropType.string,
};
