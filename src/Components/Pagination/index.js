/* eslint-disable max-params */
import React from 'react';
import { Pagination as PageComponent } from 'antd';
import PropTypes from 'prop-types';
import style from './style.module.scss';
export default function Pagination(props) {
	const fixed = {
		showSizeChanger: false,
	};
	return (
		<div className={style.paginationBlock}>
			<PageComponent
				id='result-pagination-component'
				{...props}
				{...fixed}
				itemRender={itemRender}
			/>
		</div>
	);
}
function itemRender(current, type, originalElement) {
	if (type === 'page') {
		return <a>{Number(current).toLocaleString()}</a>;
	}
	return originalElement;
}
Pagination.propTypes = {
	current: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	pageSize: PropTypes.number.isRequired,
};
