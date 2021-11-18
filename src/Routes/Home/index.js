import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ROUTES } from '../../Routes.constants';
import PropType from 'prop-types';
import style from './style.module.scss';
import Container from '../../Components/Container';
function Header(props) {
	const handleLogout = () => {
		localStorage.clear();
		props.history.push(ROUTES.LOGIN);
	};
	return<> <Container>
		<div className={style.contentBlock}>
			<div className={style.contentBlock__left}>
			<div className={style.contentArea}>
			<ul className={style.listBlock}>
				<li>1Month License  <span>80Take</span></li>
				<li>1Month License  <span>80Take</span></li>

				<li>1Month License  <span>80Take</span></li>
				<li>1Month License  <span>80Take</span></li>
				</ul>
				<div className={style.contentArea__bottom}>
					<div className={style.nextBtn}>Next</div>
					</div>	
			</div>
			<ul className={style.controlArea}>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			</div>
			<div className={style.contentBlock__right}>
			<div className={style.planArea}>
				<div className={style.planArea__img}><img src="..\img\plan1.png"/></div>
				<ul>
				<li>Choose your plan</li>
				</ul>
				<a  className="startBtn" href="">Get Started</a>
				</div>
			</div>
		</div>
		</Container>
		</>;
}
export default withRouter(Header);
Header.PropType = {
	className: PropType.string,
};
