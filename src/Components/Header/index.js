import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ROUTES } from '../../Routes.constants';
import PropType from 'prop-types';
import style from './style.module.scss';
function Header(props) {
	const handleLogout = () => {
		localStorage.clear();
		props.history.push(ROUTES.LOGIN);
	};
	return (
		<header className={style.mainHeader}>
			<div className={style.headerBrand}>
				<Link className={style.logo}><img src="../img/logo.png"/></Link>
			</div>
		</header>
	);
}
export default withRouter(Header);
Header.PropType = {
	className: PropType.string,
};
