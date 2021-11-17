import React from 'react';
import search from '../../../public/img/empty-state/no-data.png';
import graph from '../../../public/img/empty-state/list-empty.jpg';
import style from './style.module.scss';
class EmptyState extends React.Component {
	render() {
		let customStyle = {};
		if (this.props.customHeight) {
			customStyle = {
				minHeight: this.props.customHeight + 'px'
			};
		}
		return (
			<div className={style.emptyState} style={customStyle}>
				<div className={style.emptyState__content}>
					<span className={style.emptyImage}>
						{IMAGES[this.props.type] ? <img src={IMAGES[this.props.type]} alt="logo" /> : ''}
					</span>
					<h3>{this.props.title}</h3>
					<p>{this.props.description}</p>
				</div>
			</div>
		);
	}
}
export default EmptyState;
export const TYPES = {
	RESULTS: 'results',
	GRAPH: 'graph'
};
const IMAGES = {
	[TYPES.RESULTS]: search,
	[TYPES.GRAPH]: graph
};
